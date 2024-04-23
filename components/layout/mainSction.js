import Card from "../basis/card";
import Tabs from "../basis/tabs";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonCard } from "../basis/skeletonCard";
import Image from "next/image";
import errorIllustration from "../../app/assets/errorIllustration.svg";

export default function MainSection() {

    const [posts, setPosts] = useState([])

    const [selectedTab, setSelectedTab] = useState("Premier League");


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("/api/post");
            const data = await res.json();
            setPosts(data);
        }
        setTimeout(() => {
            fetchPosts();
        }, 3000)
    }, [])

    const handleTabSelect = (championship) => {
        setSelectedTab(championship);
    }

    const filteredPosts = posts.filter((post) => post.championship === selectedTab);

    const isLoading = filteredPosts.length === 0 && posts.length === 0;

    return (
        <>
            <div className="flex flex-col gap-16 px-36 mainSection-wrapper" >
                <div className="flex justify-center">
                    <Tabs  onSelect={handleTabSelect}/>
                </div>
                {!isLoading && posts.length > 0 &&
                    <div 
                        
                        className="card-container"
                    >
                        {filteredPosts.map((post, index) => (
                            <Card 
                                key={index}
                                homeTeam={post.homeTeamName}
                                awayTeam={post.AwayTeamName}
                                homeTeamLogo={post.homeLogoPath}
                                awayTeamLogo={post.AwayLogoPath}
                                championshipName={post.championship}
                                matchDate={post.Date}
                                matchHour={post.Hour}
                                linkUrl={post.linkUrl}
                            />
                        ))}
                    </div>
                }
                {!isLoading && filteredPosts.length === 0 && 
                    <div>
                        <div>
                            <div className="flex flex-col gap-6 items-center">
                                <Image src={errorIllustration} alt="error illustration" />
                                <h2 
                                    style={{
                                        color: "#EDEDED",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        textAlign: "center"
                                    
                                    }}
                                >Not {selectedTab} game are available yet!</h2>

                            </div>
                        </div>
                    </div>
                }
                {isLoading && <SkeletonCard/>}
            </div>
        </>
    )
}