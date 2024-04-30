import Badge from "../../../../components/basis/badge";
import { useState } from "react";

export default function Tabs(){

    

    return (
        <>
            <div 
                className="flex items-center gap-1 tabs-wrapper"
                style={{
                
                    overflowX: "auto",
                }}
            >
                <Badge 
                    
                    className="px-5 py-1 border border-solid rounded text-sm"
                    style={{
                        backgroundColor: "#343434",
                        color: "#EDEDED",
                        borderColor: "#505050",
                        cursor: "pointer",
                        minWidth: "fit-content"
                    }}
                >Play off</Badge>
            </div>
        </>
    )
}