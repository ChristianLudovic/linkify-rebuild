-- CreateTable
CREATE TABLE "NbaPost" (
    "id" SERIAL NOT NULL,
    "homeTeamName" TEXT NOT NULL,
    "AwayTeamName" TEXT NOT NULL,
    "homeLogoPath" TEXT NOT NULL,
    "AwayLogoPath" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "Hour" TEXT NOT NULL,
    "linkUrl" TEXT NOT NULL,

    CONSTRAINT "NbaPost_pkey" PRIMARY KEY ("id")
);
