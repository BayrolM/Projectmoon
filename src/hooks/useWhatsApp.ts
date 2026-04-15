import { getWhatsAppUrl } from "../utils/whatsapp";

export function useWhatsApp(message: string) {
  const whatsappUrl = getWhatsAppUrl(message);

  return { whatsappUrl };
}
