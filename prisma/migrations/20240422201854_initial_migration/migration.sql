-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "homeTeamName" TEXT NOT NULL,
    "AwayTeamName" TEXT NOT NULL,
    "homeLogoPath" TEXT NOT NULL,
    "AwayLogoPath" TEXT NOT NULL,
    "championship" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "Hour" TEXT NOT NULL,
    "linkUrl" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
