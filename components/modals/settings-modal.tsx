"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const SettingsModal = () => {
    const settings = useSettings();

    return(
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-l font-medium">
                        My settings
                    </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearance
                        </Label>
                        <span className="text-[0.9rem] text-muted-foreground">
                            Customize how Dotion looks on your device
                        </span>
                    </div>
                    <ModeToggle/>
                </div>
            </DialogContent>
        </Dialog>
    );
};