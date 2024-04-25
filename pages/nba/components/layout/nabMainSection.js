import Card from "../../../../components/basis/card";
import Tabs from "../basis/tabs";
import { useEffect, useState } from "react";
import { SkeletonCard } from "@/components/basis/skeletonCard";
import Image from "next/image";
import errorIllustration from "../../../../app/assets/errorIllustration.svg";

export default function NbaMainSection() {
    const [nbaposts, setNbaPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNbaPosts = async () => {
            try {
                const res = await fetch("/api/nbapost");
                const data = await res.json();
                setNbaPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false);
            }
        };

        setTimeout(() => {
            fetchNbaPosts();
        }, 3000);
    }, []);

    const hasPosts = nbaposts.length > 0;

    return (
        <>
            <div className="flex flex-col gap-16 px-36 mainSection-wrapper">
                <div className="flex justify-center">
                    <Tabs />
                </div>
                {isLoading && <SkeletonCard />}
                {!isLoading && !hasPosts && (
                    <div>
                        <div>
                            <div className="flex flex-col gap-6 items-center">
                                <Image src={errorIllustration} alt="error illustration" />
                                <h2 style={{ color: "#EDEDED", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                    No {selectedTab} games are available yet!
                                </h2>
                            </div>
                        </div>
                    </div>
                )}
                {!isLoading && (
                    <div className="card-container">
                        {nbaposts.map((post, index) => (
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
                )}
            </div>
        </>
    );
}