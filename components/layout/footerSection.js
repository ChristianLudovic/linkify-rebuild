import Image from 'next/image'

export default function FooterSection() {
    return (
        <>
            <div className="px-36 pb-4 footer-section">
                <div
                    
                    className='footer-container'
                >
                    <div className='flex flex-col gap-6'>
                        <Image 
                            src="/logo/logo.svg" 
                            width={104} 
                            height={26} 
                            alt="logo"
                        />
                        <p
                            className='text-sm '
                            style={{
                                color: "#707070",
                                fontWeight: "400",
                                lineHeight: "150%"
                            }}
                        >
                            Linkify is a hand-sourced soccer streaming link bank <br/> that allows you to access French-language<br/> channels and enjoy big soccer matches in high definition<br/> from your smart phone or TV.</p>
                        <h2
                            className='text-sm'
                            style={{    
                                color: "#fff",
                            }}
                        >ChrisFacile_Dev ❤</h2>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 style={{color: "#fff", }}>Compagny</h2>
                        <div className='flex flex-col gap-3 text-sm' style={{color: "#707070"}}>
                            <p>About</p>
                            <p>Privacy Policy</p>
                        </div>    
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 style={{color: "#fff", }}>Discover</h2>
                        <div className='flex flex-col gap-3 text-sm' style={{color: "#707070"}}>
                            <p>Affiliate</p>
                            <p>Partners</p>
                        </div>
                    </div>
                    <div className='flex  justify-start gap-2'>
                        <div className='flex items-center justify-center p-2 rounded bg-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path d="M15.3152 1.48166C14.753 1.73721 14.147 1.90515 13.5191 1.98546C14.1616 1.59848 14.6581 0.985159 14.8918 0.247709C14.2857 0.612783 13.614 0.868336 12.9058 1.01437C12.3289 0.386437 11.5185 0.0213623 10.5985 0.0213623C8.88264 0.0213623 7.48075 1.42325 7.48075 3.1537C7.48075 3.40195 7.50995 3.6429 7.56106 3.86925C4.96173 3.73782 2.64716 2.48927 1.10655 0.59818C0.83639 1.05817 0.683059 1.59848 0.683059 2.168C0.683059 3.25592 1.23067 4.21972 2.07764 4.76733C1.55924 4.76733 1.07734 4.6213 0.653853 4.40226V4.42416C0.653853 5.94287 1.73447 7.21333 3.16557 7.49809C2.7061 7.62383 2.22374 7.64132 1.75638 7.5492C1.95469 8.17164 2.34308 8.71628 2.86695 9.10656C3.39081 9.49684 4.02382 9.71314 4.67698 9.72505C3.5698 10.6015 2.19739 11.0753 0.78528 11.0685C0.537029 11.0685 0.288778 11.0539 0.0405273 11.0247C1.42781 11.9155 3.07795 12.4339 4.84491 12.4339C10.5985 12.4339 13.76 7.65872 13.76 3.51878C13.76 3.38005 13.76 3.24862 13.7527 3.10989C14.3661 2.6718 14.8918 2.11689 15.3152 1.48166Z" fill="black"/>
                            </svg>
                        </div> 
                        <div className='flex items-center justify-center p-2 rounded bg-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <path d="M5.89301 3.75156C5.89282 4.13885 5.73878 4.51021 5.46478 4.78393C5.19079 5.05765 4.81928 5.21132 4.43198 5.21112C4.04469 5.21093 3.67333 5.05689 3.39961 4.7829C3.12589 4.5089 2.97222 4.13739 2.97241 3.7501C2.97261 3.3628 3.12664 2.99144 3.40064 2.71772C3.67464 2.444 4.04615 2.29033 4.43344 2.29053C4.82074 2.29072 5.19209 2.44476 5.46581 2.71876C5.73954 2.99275 5.8932 3.36426 5.89301 3.75156ZM5.93682 6.29248H3.01622V15.4339H5.93682V6.29248ZM10.5514 6.29248H7.64537V15.4339H10.5222V10.6369C10.5222 7.96452 14.005 7.71627 14.005 10.6369V15.4339H16.8891V9.64386C16.8891 5.13884 11.7342 5.30677 10.5222 7.51913L10.5514 6.29248Z" fill="black"/>
                            </svg>
                        </div> 
                        <div className='flex items-center justify-center p-2 rounded bg-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <path d="M10.9577 9.95775H12.7831L13.5132 7.03715H10.9577V5.57686C10.9577 4.8248 10.9577 4.11656 12.418 4.11656H13.5132V1.66326C13.2752 1.63186 12.3764 1.56104 11.4272 1.56104C9.44486 1.56104 8.03713 2.77089 8.03713 4.99274V7.03715H5.84668V9.95775H8.03713V16.164H10.9577V9.95775Z" fill="black"/>
                            </svg>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </>
    )
}