'use client'

import { useEffect, useState } from "react";
import { Modal, Button } from "@heroui/react";
import ContactForm from "@/components/ContactForm";

export default function PopupModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const sessionSeen = sessionStorage.getItem("amaanc_popup_seen");
        if (sessionSeen) return;

        const timer = setTimeout(() => {
            setIsOpen(true);
            sessionStorage.setItem("amaanc_popup_seen", "true");
        }, 120000); // 2 minutes

        return () => clearTimeout(timer);
    }, []);

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Get a Free Consultation</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                                Our experts are ready to help you transform your business.
                            </p>
                            <ContactForm source="popup_timed" />
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
