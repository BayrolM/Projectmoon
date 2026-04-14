import { WHATSAPP_NUMBER, WHATSAPP_BASE_URL } from "../config/constants";

export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
