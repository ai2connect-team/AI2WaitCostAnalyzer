/**
 * Calculation utilities for demurrage (Standgeld) analysis.
 *
 * Based on German law:
 * - §412 HGB: Carriers are entitled to demurrage compensation
 * - VBGL §5: Reasonable free waiting time is ~2 hours (120 minutes) per stop
 *
 * Calculation logic:
 * - Total stops/month = trucks × tours/day × stops/tour × working days
 * - Total waiting hours/month = total stops × avg wait time (in hours)
 * - Cost of lost time = total waiting hours × demurrage rate
 * - Claimable demurrage: only waiting time beyond 120 min threshold
 */

/** Free waiting period per stop in minutes (VBGL §5) */
export const FREE_WAITING_MINUTES = 120;

/**
 * Calculate all demurrage-related metrics.
 *
 * @param {Object} inputs - Calculator inputs
 * @param {number} inputs.trucks - Number of trucks
 * @param {number} inputs.toursPerDay - Average tours per truck per day
 * @param {number} inputs.stopsPerTour - Average stops per tour
 * @param {number} inputs.avgWaitMinutes - Average waiting time per stop in minutes
 * @param {number} inputs.demurrageRate - Demurrage rate in €/hour
 * @param {number} inputs.workingDays - Working days per month
 * @returns {Object} Calculation results
 */
export function calculateDemurrage({
    trucks,
    toursPerDay,
    stopsPerTour,
    avgWaitMinutes,
    demurrageRate,
    workingDays,
}) {
    // Total stops per month across all trucks
    const totalStopsPerMonth = trucks * toursPerDay * stopsPerTour * workingDays;

    // Total waiting hours per month
    const totalWaitingHoursPerMonth = (totalStopsPerMonth * avgWaitMinutes) / 60;

    // Total cost of lost time (all waiting, regardless of threshold)
    const monthlyCostOfLostTime = totalWaitingHoursPerMonth * demurrageRate;

    // Claimable demurrage: only the portion of waiting time beyond the
    // free waiting period (120 min per stop) is legally claimable.
    //
    // If avg wait <= 120 min, using aggregate method:
    //   totalExcessMinutes = totalWaitMinutes - (totalStops × 120)
    //   If totalExcessMinutes < 0, claimable = 0
    //
    // This aggregate approach reflects that across many stops, some will
    // exceed the threshold even if the average is below it.
    const totalWaitMinutesMonth = totalStopsPerMonth * avgWaitMinutes;
    const totalFreeMinutes = totalStopsPerMonth * FREE_WAITING_MINUTES;
    const totalExcessMinutes = Math.max(0, totalWaitMinutesMonth - totalFreeMinutes);
    const claimableHoursPerMonth = totalExcessMinutes / 60;
    const monthlyClaimableDemurrage = claimableHoursPerMonth * demurrageRate;

    // Annual figures
    const annualCostOfLostTime = monthlyCostOfLostTime * 12;
    const annualClaimableDemurrage = monthlyClaimableDemurrage * 12;

    return {
        totalStopsPerMonth,
        totalWaitingHoursPerMonth: Math.round(totalWaitingHoursPerMonth * 10) / 10,
        monthlyCostOfLostTime: Math.round(monthlyCostOfLostTime),
        monthlyClaimableDemurrage: Math.round(monthlyClaimableDemurrage),
        annualCostOfLostTime: Math.round(annualCostOfLostTime),
        annualClaimableDemurrage: Math.round(annualClaimableDemurrage),
        claimableHoursPerMonth: Math.round(claimableHoursPerMonth * 10) / 10,
    };
}

/**
 * Format a number as EUR currency.
 * @param {number} value
 * @returns {string} Formatted string like "12.345 €"
 */
export function formatCurrency(value) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
}

/**
 * Format a number with German locale (dot as thousands separator).
 * @param {number} value
 * @param {number} decimals
 * @returns {string}
 */
export function formatNumber(value, decimals = 0) {
    return new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
}
