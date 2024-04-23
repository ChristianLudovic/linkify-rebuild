import Image from "next/image"
import Link from "next/link"
import {toast} from "sonner"

export default function Card({ ...props }) {
    return(
        <>
            <div 
                className="inline-flex flex-col items-center gap-6 px-4 py-5 border border-solid "
                style={{
                    backgroundColor: "#232323",
                    borderColor: "#2E2E2E",
                    borderRadius: "18px"

                }}
                
            >
                <div className="flex gap-3 items-center justify-between ">
                    <div 
                        className="flex gap-2"
                        style={{
                            color: "#EDEDED"
                        }}
                    >
                        <Image 
                            src={props.homeTeamLogo} 
                            width={15} 
                            height={21} 
                            alt="Real Madrid" 
                            style={{ 
                                objectFit: "contain",
                            }}
                        />
                        <p className="text-sm">{props.homeTeam}</p>
                    </div>
                    <p 
                        className="text-xs" 
                        style={{
                            color: "#EDEDED"
                        }}
                    >vs</p>
                    <div 
                        className="flex gap-2"
                        style={{
                            color: "#EDEDED"
                        }}
                    >
                        <p className="text-sm">{props.awayTeam}</p>
                        <Image 
                            src={props.awayTeamLogo}
                            width={15} 
                            height={21} 
                            alt="Real Madrid" 
                            style={{ 
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <div 
                        className="flex items-center justify-between gap-7"
                        style={{
                            color: "#707070"
                        }}
                    >
                        <p className="text-sm">{props.matchDate}</p>
                        <p className="text-sm w-28">{props.matchHour} (GMT+1)</p>
                        <div className="flex items-center justify-center"
                            variant="primary"
                            onClick={() => 
                                toast("Added to favorite",{
                                    description: "You can now access this match from your favorite list",
                                    action: {
                                        label: "Undo",
                                        onClick: () => console.log("undo")
                                    },

                                    style: {
                                        backgroundColor: "#232323",
                                        border: "1px solid #2E2E2E",
                                        color: "#fff"
                                        
                                    }
                                }
                            )
                            }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.7733 15.1133C11.42 15.1133 10.9667 15 10.4 14.6667L8.40666 13.4867C8.2 13.3667 7.8 13.3667 7.6 13.4867L5.6 14.6667C4.42 15.3667 3.72666 15.0867 3.41333 14.86C3.10666 14.6333 2.62666 14.0533 2.94 12.72L3.41333 10.6733C3.46666 10.46 3.36 10.0933 3.2 9.93334L1.54666 8.28001C0.719997 7.45334 0.786664 6.74667 0.899997 6.40001C1.01333 6.05334 1.37333 5.44 2.52 5.24667L4.64666 4.89334C4.84666 4.86 5.13333 4.64667 5.22 4.46667L6.4 2.11334C6.93333 1.04 7.63333 0.880005 8 0.880005C8.36666 0.880005 9.06666 1.04 9.6 2.11334L10.7733 4.46C10.8667 4.64 11.1533 4.85334 11.3533 4.88667L13.48 5.24C14.6333 5.43334 14.9933 6.04667 15.1 6.39334C15.2067 6.74001 15.2733 7.44667 14.4533 8.27334L12.8 9.93334C12.64 10.0933 12.54 10.4533 12.5867 10.6733L13.06 12.72C13.3667 14.0533 12.8933 14.6333 12.5867 14.86C12.42 14.98 12.1533 15.1133 11.7733 15.1133ZM8 12.3933C8.32666 12.3933 8.65333 12.4733 8.91333 12.6267L10.9067 13.8067C11.4867 14.1533 11.8533 14.1533 11.9933 14.0533C12.1333 13.9533 12.2333 13.6 12.0867 12.9467L11.6133 10.9C11.4867 10.3467 11.6933 9.63334 12.0933 9.22667L13.7467 7.57334C14.0733 7.24667 14.22 6.92667 14.1533 6.70667C14.08 6.48667 13.7733 6.30667 13.32 6.23334L11.1933 5.88C10.68 5.79334 10.12 5.38 9.88666 4.91334L8.71333 2.56667C8.5 2.14 8.23333 1.88667 8 1.88667C7.76666 1.88667 7.5 2.14 7.29333 2.56667L6.11333 4.91334C5.88 5.38 5.32 5.79334 4.80666 5.88L2.68666 6.23334C2.23333 6.30667 1.92666 6.48667 1.85333 6.70667C1.78 6.92667 1.93333 7.25334 2.26 7.57334L3.91333 9.22667C4.31333 9.62667 4.52 10.3467 4.39333 10.9L3.92 12.9467C3.76666 13.6067 3.87333 13.9533 4.01333 14.0533C4.15333 14.1533 4.51333 14.1467 5.1 13.8067L7.09333 12.6267C7.34666 12.4733 7.67333 12.3933 8 12.3933Z" fill="#707070"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link legacyBehavior href={props.linkUrl}>
                            <a 
                                className="text-sm"
                                style={{
                                    color: "#707070",
                                    textDecoration: "none"
                                }}
                            >Stream channel</a>
                        </Link>
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M17.1357 16.5185C17.0123 16.5898 16.8626 16.6156 16.709 16.5744C16.4119 16.4948 16.2319 16.183 16.3115 15.8859L17.8323 10.2101L12.1565 8.68924C11.8594 8.60963 11.6794 8.29786 11.759 8.00075C11.8386 7.70364 12.1503 7.52364 12.4475 7.60325L18.6663 9.26958C18.9634 9.34919 19.1434 9.66096 19.0638 9.95807L17.3975 16.1769C17.3563 16.3306 17.2591 16.4473 17.1357 16.5185Z" fill="#707070"/>
                                <path d="M18.6915 10.3635L7.76009 16.6747C7.49379 16.8285 7.14545 16.7351 6.9917 16.4688C6.83795 16.2025 6.93129 15.8542 7.19759 15.7004L18.129 9.38919C18.3953 9.23544 18.7436 9.32878 18.8974 9.59508C19.0511 9.86138 18.9578 10.2097 18.6915 10.3635Z" fill="#707070"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}