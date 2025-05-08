import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/sheet";

export const MobileNavbar = () => {
  return (
   <Sheet>
     <SheetTrigger className="flex items-center gap-2 text-sm">
      <MenuIcon className="size-6 cursor-pointer"/>
      Menu
    </SheetTrigger>
    <SheetContent
      side="left"
      className="p-0 transition-none"
    >
      <SheetHeader className="p-4 border-b">
        <div className="flex items-center">
          <SheetTitle>Menu</SheetTitle>
        </div>
      </SheetHeader>
    </SheetContent>
   </Sheet>
  )
}
