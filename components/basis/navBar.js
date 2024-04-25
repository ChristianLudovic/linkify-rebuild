import Link from "next/link";
import Button from "./button";
import Image from "next/image";

export default function NavBar() {
    return (
        <>
            <div 
                className="px-36 py-5 navBar-wrapper"
                style={{
                    borderBottom: "1px solid #2E2E2E"
                }}
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center justify-center ">
                            <Image src="/logo/logo.svg" width={104} height={26} alt="Logo" />
                        </div>
                        <div className="flex gap-7 text-sm nav-links">
                            <Link legacyBehavior href="/">
                                <a style={{
                                    textDecoration: "none",
                                    color: "#EDEDED"
                                }}>Product</a>
                            </Link>
                            <Link legacyBehavior href="/">
                                <a style={{
                                    textDecoration: "none",
                                    color: "#EDEDED"
                                }}>About us</a>
                            </Link>
                            <Link legacyBehavior href="/">
                                <a style={{
                                    textDecoration: "none",
                                    color: "#EDEDED"
                                }}>Favorite List</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link legacyBehavior href="https://github.com/ChristianLudovic">
                            <a className="flex gap-1 items-center" style={{
                                textDecoration: "none",
                                color: "#EDEDED"
                            }}>
                                <div className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3.84238C7.38799 3.84238 3.64941 7.5868 3.64941 12.2072C3.64941 15.9024 6.04188 19.0381 9.36043 20.1436C9.77796 20.2204 9.92993 19.9625 9.92993 19.7403C9.92993 19.5424 9.92325 19.0155 9.91908 18.3182C7.59593 18.8235 7.10575 17.1967 7.10575 17.1967C6.72662 16.2297 6.17883 15.9726 6.17883 15.9726C5.42059 15.4547 6.23644 15.4648 6.23644 15.4648C7.07402 15.5232 7.51492 16.3266 7.51492 16.3266C8.2598 17.6043 9.46981 17.2351 9.94497 17.0214C10.0218 16.4811 10.2372 16.1128 10.4761 15.9041C8.62223 15.6928 6.67236 14.9746 6.67236 11.7696C6.67236 10.8569 6.99802 10.1095 7.53163 9.52498C7.44562 9.31371 7.15919 8.46279 7.61347 7.31207C7.61347 7.31207 8.31492 7.0866 9.9099 8.16884C10.5911 7.98305 11.294 7.88842 12.0001 7.88742C12.7099 7.89077 13.4238 7.98346 14.0911 8.16884C15.6852 7.0866 16.385 7.31124 16.385 7.31124C16.8409 8.46279 16.5537 9.31371 16.4684 9.52498C17.0029 10.1095 17.3269 10.8569 17.3269 11.7696C17.3269 14.9829 15.3738 15.6902 13.514 15.8973C13.8138 16.1554 14.0802 16.6656 14.0802 17.4465C14.0802 18.5637 14.0702 19.4664 14.0702 19.7403C14.0702 19.9642 14.2205 20.2247 14.6447 20.1428C16.3076 19.5851 17.7531 18.5188 18.777 17.0949C19.8009 15.6709 20.3514 13.9611 20.3506 12.2072C20.3506 7.5868 16.6113 3.84238 12.0001 3.84238Z" fill="#A0A0A0"/>
                                    </svg>
                                </div>
                                <p className="text-xs visit-profile">Visit my profile</p>
                            </a>
                        </Link>
                        <Button 
                            
                            className="px-8 py-1 border border-solid rounded text-sm"
                            style= {
                                { 
                                    backgroundColor: "#37996B", 
                                    color: "#fff",
                                    borderColor: "#3ECF8E"
                                }
                            }  
                        >
                            Sign In
                        </Button>
                        
                    </div>
                </div>
            </div>
        </>
    );
}