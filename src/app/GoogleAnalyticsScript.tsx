import Script from 'next/script'
import React from 'react'

const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script strategy="afterInteractive"
                async src="https://www.googletagmanager.com/gtag/js?id=G-YZ8ZX0RZB8" />
            <Script id="gtag-init"
                strategy="afterInteractive"
            >
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-YZ8ZX0RZB8');`}
            </Script>
        </>)
}

export default GoogleAnalyticsScript