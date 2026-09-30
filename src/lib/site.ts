export const siteUrl = "https://megastreamsapp.com";
export const whatsappNumber = "9647814272648";
export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
