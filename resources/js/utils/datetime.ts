export const formatDateTime = (date: string): string => {
    let dateLocal = new Date(date).toLocaleString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    dateLocal = dateLocal
        .replace(/a\.?\s*m\./i, "AM")
        .replace(/p\.?\s*m\./i, "PM");
    return dateLocal[0].toUpperCase() + dateLocal.substring(1);
};
