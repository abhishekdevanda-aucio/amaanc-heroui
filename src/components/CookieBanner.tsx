'use client'

import { useState, useEffect } from 'react';
import { Button } from "@heroui/react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('amaanc_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('amaanc_cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 shadow-lg">
            <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    <p>
                        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button size="sm" variant="ghost" onPress={() => setIsVisible(false)}>
                        Decline
                    </Button>
                    <Button size="sm" variant="primary" onPress={acceptCookies}>
                        Accept
                    </Button>
                </div>
            </div>
        </div>
    );
}
