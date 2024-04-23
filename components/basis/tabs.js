import Badge from "./badge";
import { useState } from "react";

export default function Tabs( {onSelect} ){

    const [selectedTab, setSelectedTab] = useState("Premier League");

    const handleTabClick = (championship) => {
        setSelectedTab(championship);
        onSelect(championship);
        
    }

   

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
                    onClick={() => handleTabClick("Premier League")}
                >Premier League</Badge>
                <Badge 
                    
                    className="px-5 py-1 border border-solid rounded text-sm"
                    style={{
                        backgroundColor: selectedTab === "Champions League" ? "#343434" : "transparent",
                        color: selectedTab === "Champions League" ? "#EDEDED" : "#707070",
                        borderColor: "#505050",
                        cursor: "pointer",
                        minWidth: "fit-content"
                    }}    
                    onClick={() => handleTabClick("Champions League")}
                >Champions League</Badge>
                <Badge 
                    
                    className="px-5 py-1 border border-solid rounded text-sm"
                    style={{
                        backgroundColor: selectedTab === "La Liga" ? "#343434" : "transparent",
                        color: selectedTab === "La Liga" ? "#EDEDED" : "#707070",
                        borderColor: "#505050",
                        cursor: "pointer",
                        minWidth: "fit-content"
                    }}
                    onClick={() => handleTabClick("La Liga")}
                >La Liga</Badge>
                <Badge 
                    
                    className="px-5 py-1 border border-solid rounded text-sm"
                    style={{
                        backgroundColor: selectedTab === "Ligue 1" ? "#343434" : "transparent",
                        color: selectedTab === "Ligue 1" ? "#EDEDED" : "#707070",
                        borderColor: "#505050",
                        cursor: "pointer",
                        minWidth: "fit-content"
                    }}
                    onClick={() => handleTabClick("Ligue 1")}
                >Ligue 1</Badge>
                <Badge 
                    
                    className="px-5 py-1 border border-solid rounded text-sm"
                    style={{
                        backgroundColor: selectedTab === "Europa League" ? "#343434" : "transparent",
                        color: selectedTab === "Europa League" ? "#EDEDED" : "#707070",
                        borderColor: "#505050",
                        cursor: "pointer",
                        minWidth: "fit-content"
                    }}
                    onClick={() => handleTabClick("Europa League")}
                >Europa League</Badge>
                <Badge 
                    
                    className="px-5 py-1 border border-solid rounded text-sm"
                    style={{
                        backgroundColor: selectedTab === "BundesLiga" ? "#343434" : "transparent",
                        color: selectedTab === "BundesLiga" ? "#EDEDED" : "#707070",
                        borderColor: "#505050",
                        cursor: "pointer",
                        minWidth: "fit-content"
                    }}
                    onClick={() => handleTabClick("BundesLiga")}
                >BundesLiga</Badge>
                <Badge 
                    
                    className="px-5 py-1 border border-solid rounded text-sm"
                    style={{
                        backgroundColor: selectedTab === "Serie A" ? "#343434" : "transparent",
                        color: selectedTab === "Serie A" ? "#EDEDED" : "#707070",
                        borderColor: "#505050",
                        cursor: "pointer",
                        minWidth: "fit-content"
                    }}
                    onClick={() => handleTabClick("Serie A")}
                >Serie A</Badge>
            </div>
        </>
    );
}