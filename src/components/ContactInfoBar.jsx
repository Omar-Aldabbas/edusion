import { MapPin, Smartphone, Mail, MapIcon } from "lucide-react";

export const ContactInfoBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 mt-10 px-20">
      <div className="flex flex-col items-center py-1 flex-1 px-6">
        <MapIcon size={40} className="text-primary mb-2" />
        <span className="text-foreground font-semibold text-xl mb-4">Our Location</span>
        <span className="text-muted text-sm text-center mt-1">
          3481 Melrose Place, Beverly Hills<br />CA 90210
        </span>
      </div>

      <div className="flex flex-col items-center py-1 flex-1 px-6 md:border-l md:border-r border-gray-200">
        <Smartphone size={40} className="text-primary mb-2" />
        <span className="text-foreground font-semibold text-xl mb-4">Telephone</span>
        <span className="text-muted text-sm text-center mt-1">
          (+1) 517 397 7100<br />(+1) 411 315 8138
        </span>
      </div>

      <div className="flex flex-col items-center py-1 flex-1 px-6">
        <Mail size={40} className="text-primary mb-2" />
        <span className="text-foreground font-semibold text-xl mb-4">Send Email</span>
        <span className="text-muted text-sm text-center mt-1">
          Info@example.com<br />admin@example.com
        </span>
      </div>
    </div>
  );
};
