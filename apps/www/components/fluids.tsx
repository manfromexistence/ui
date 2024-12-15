"use client"
import { Cog } from "lucide-react";
import Script from "next/script";
import { useState } from "react";

export default function Fluids() {
    const [settings, setSettings] = useState(false);
    function HandleSettings(){

    }
    return (
        <div className="relative h-full w-full">
            {/* <Script src="dat.gui.min.js" /> */}
            <Script id="show-fluids">
                {`
                  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                  ga('create', 'UA-105392568-1', 'auto');
                  ga('send', 'pageview');`
                }
            </Script>
            <Script src="fluid.js" />
            <canvas className="h-full w-full rounded-md"></canvas>
            {/* <div onClick={HandleSettings} className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md border hover:bg-primary-foreground">
                <Cog className="h-4 w-4" />
            </div> */}
        </div>
    );
}