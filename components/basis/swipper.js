import Badge from "./badge";

export default function Swipper() {

    const redirectToBuyMeAcoffee = () => {
        window.open("https://www.buymeacoffee.com/ChristianLudovic", "_blank");
    }

    return (
        <>
            <div className="flex gap-2 items-center px-2 py-1 border border-solid rounded-full cursor-pointer"
                style={{ 
                    backgroundColor: "#242424",
                    borderColor: "#2E2E2E"
                }}

                onClick={redirectToBuyMeAcoffee}
            >
                <Badge 
                    
                    className="px-3 py-1 rounded-full border border-solid text-sm"
                    style= {
                        { 
                            backgroundColor: "#26352E", 
                            color: "#85E0B7",
                            borderColor: "#15593B"
                        }}
                >
                    Version 2.1
                </Badge>
                <p className="text-white text-sm">Support the creator</p>
                <div className="flex items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M11.9134 5.33334L14.5801 8.00001M14.5801 8.00001L11.9134 10.6667M14.5801 8.00001H2.58008" stroke="#EDEDED" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </>
    );
}