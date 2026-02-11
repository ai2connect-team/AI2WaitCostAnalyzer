import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatCurrency, formatNumber } from './calculations';

/**
 * Generate a professional PDF report of the demurrage analysis.
 * Accepts a `t` translation function from react-i18next.
 *
 * @param {Object} inputs - The calculator form inputs
 * @param {Object} results - The calculated results
 * @param {Function} t - Translation function from useTranslation
 */
export function generatePDF(inputs, results, t) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // ── Header ──
    doc.setFillColor(15, 23, 42); // surface-950
    doc.rect(0, 0, pageWidth, 45, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('AI2 WaitCost Analyzer', 20, 22);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(t('pdf.subtitle'), 20, 32);

    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    const date = new Date().toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    doc.text(t('pdf.createdOn', { date }), 20, 40);

    // ── Input Parameters ──
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(t('pdf.inputTitle'), 20, 60);

    autoTable(doc, {
        startY: 65,
        head: [[t('pdf.parameterHeader'), t('pdf.valueHeader')]],
        body: [
            [t('calculator.fields.trucks.label'), String(inputs.trucks)],
            [t('calculator.fields.toursPerDay.label'), String(inputs.toursPerDay)],
            [t('calculator.fields.stopsPerTour.label'), String(inputs.stopsPerTour)],
            [t('calculator.fields.avgWaitMinutes.label'), `${inputs.avgWaitMinutes} ${t('pdf.minutesUnit')}`],
            [t('calculator.fields.demurrageRate.label'), `${formatCurrency(inputs.demurrageRate)}${t('pdf.perHourUnit')}`],
            [t('calculator.fields.workingDays.label'), String(inputs.workingDays)],
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [30, 64, 175],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 10,
        },
        bodyStyles: {
            fontSize: 10,
            textColor: [30, 41, 59],
        },
        alternateRowStyles: {
            fillColor: [241, 245, 249],
        },
        margin: { left: 20, right: 20 },
        tableWidth: 'auto',
    });

    // ── Results ──
    const resultsY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text(t('pdf.resultsTitle'), 20, resultsY);

    autoTable(doc, {
        startY: resultsY + 5,
        head: [[t('pdf.metricHeader'), t('pdf.valueHeader')]],
        body: [
            [t('pdf.totalStops'), formatNumber(results.totalStopsPerMonth)],
            [t('pdf.totalWaitHours'), `${formatNumber(results.totalWaitingHoursPerMonth, 1)} ${t('pdf.hoursUnit')}`],
            [t('pdf.monthlyCost'), formatCurrency(results.monthlyCostOfLostTime)],
            [t('pdf.monthlyClaimable'), formatCurrency(results.monthlyClaimableDemurrage)],
            [t('pdf.annualCost'), formatCurrency(results.annualCostOfLostTime)],
            [t('pdf.annualClaimable'), formatCurrency(results.annualClaimableDemurrage)],
        ],
        theme: 'grid',
        headStyles: {
            fillColor: [22, 163, 74],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 10,
        },
        bodyStyles: {
            fontSize: 10,
            textColor: [30, 41, 59],
        },
        alternateRowStyles: {
            fillColor: [241, 245, 249],
        },
        margin: { left: 20, right: 20 },
        tableWidth: 'auto',
    });

    // ── Legal Reference ──
    const legalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 41, 59);
    doc.text(t('pdf.legalTitle'), 20, legalY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);

    const legalLines = t('pdf.legalLines', { returnObjects: true });
    legalLines.forEach((line, index) => {
        doc.text(line, 20, legalY + 7 + index * 5);
    });

    // ── Footer ──
    const footerY = doc.internal.pageSize.getHeight() - 15;
    doc.setDrawColor(226, 232, 240);
    doc.line(20, footerY - 5, pageWidth - 20, footerY - 5);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('AI2 WaitCost Analyzer — www.ai2connect.de', 20, footerY);
    doc.text(t('pdf.page', { current: 1, total: 1 }), pageWidth - 40, footerY);

    // Save
    const filename = `${t('pdf.filename')}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(filename);
}
