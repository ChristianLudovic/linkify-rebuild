import Badge from "../../../../components/basis/badge";
import { useState } from "react";

export default function Tabs(){

    const [selectedTab, setSelectedTab] = useState("Premier League");

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
                        backgroundColor: selectedTab === "Premier League" ? "#343434" : "transparent",
                        color: selectedTab === "Premier League" ? "#EDEDED" : "#707070",
                        borderColor: "#505050",
                        cursor: "pointer",
                        minWidth: "fit-content"
                    }}
                >Play off</Badge>
            </div>
        </>
    )
}