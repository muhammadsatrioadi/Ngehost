import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <Icon 
            icon="material-symbols:cloud" 
            className="text-white text-xl"
          />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Ngehost
      </span>
    </Link>
  );
};

export default Logo;
