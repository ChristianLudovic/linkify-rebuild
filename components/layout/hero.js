import Button from "../basis/button";
import Swipper from "../basis/swipper";

export default function Hero(){
    return (
        <>
            <div 
                className="flex flex-col items-center px-36 hero-wrapper"
               
            >
                <Swipper />
                <div className="flex flex-col items-center gap-8">
                    <h1
                        className="main-title"  
                    >All your football channels<br/>are sourced here. Enjoy!</h1>
                    <div className="flex flex-col items-center gap-9">
                        <p
                            style={{
                                textAlign: "center",
                                color: "#EDEDED",
                                fontSize: "18px",
                                fontWeight: "400",
                                lineHeight: "150%"
                            }}
                            className="sub-title"
                        >Dive into the action with our streaming selection. All the matches. <br/>Just a click away</p>
                        <div className="flex gap-2 items-center">
                            <Button 
                                children = "Sign In"
                                className="px-8 py-2 border border-solid rounded text-sm"
                                style= {
                                    { 
                                        backgroundColor: "#37996B", 
                                        color: "#fff",
                                        borderColor: "#3ECF8E"
                                    }}  
                            />
                            <Button 
                                children = "Contact Us"
                                className="px-8 py-2 border border-solid rounded text-sm"
                                style= {
                                    { 
                                        backgroundColor: "#2E2E2E", 
                                        color: "#EDEDED",
                                        borderColor: "#3e3e3e"
                                    }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}