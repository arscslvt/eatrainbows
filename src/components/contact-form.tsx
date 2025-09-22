import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "@phosphor-icons/react";

export default function ContactForm({
  content,
  hideIcon,
}: {
  content?: string;
  hideIcon?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const scriptElement = document.createElement("script");
    scriptElement.src = "//embed.typeform.com/next/embed.js";
    scriptElement.defer = true;
    document.body.appendChild(scriptElement);

    return () => {
      document.body.removeChild(scriptElement);
    };
  }, [isOpen]);

  return (
    <div className="w-full flex justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant={"mesh"}
            className="!px-18 h-14 mesh-2 rounded-[32px]"
            id="contact-button"
          >
            {content ?? "Fill the form"}
            {!hideIcon && <ArrowRight />}
          </Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col !w-dvw sm:w-3/4 sm:h-4/5 sm:!max-w-4/5 bg-background/80 backdrop-blur-2xl p-0 rounded-xl">
          <DialogHeader className="pt-6 px-4 pb-2">
            <DialogTitle>We're ready to know your wishes</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you in a glitter
            </DialogDescription>
          </DialogHeader>

          <div
            data-tf-live="01K5RX6SZ612S4H1SQBZ0H0FH2"
            className="flex-1 bg-transparent"
          ></div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
