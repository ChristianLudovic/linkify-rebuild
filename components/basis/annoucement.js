import Link from "next/link";
import Image from "next/image";

export default function Announcement(){
    return (
        <>
            <div 
                className="flex items-center justify-center gap-4 px-36 py-4 announcement-wrapper"
                style={{
                    
                    color: "#EDEDED",
                    borderBottom: "1px solid #2E2E2E",
                }}
            >
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center">
                        <Image src="/basketBall.svg" width={18} height={18} alt="basket ball" />
                    </div>
                    <p 
                        className="text-sm"
                        style={{
                            color: "#707070"
                        }}
                    >Nba playoff links are aivalable</p>
                </div>
                
                <Link legacyBehavior href="/">
                    <a
                        style={{
                            color: "#37996B",
                            textDecoration: "underline",
                            fontSize: "14px"
                        }}
                    >Check it</a>
                </Link>
            </div>
            
        </>
    )
}