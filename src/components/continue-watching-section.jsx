import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// This would typically come from your backend or state management
const continueWatchingList = [
  {
    id: 1,
    animeTitle: "Attack on Titan",
    episodeTitle: "The Fall of Shiganshina",
    episodeImage: "/placeholder.svg?height=180&width=320",
    progress: { current: 15, total: 25 },
    url: "/watch/attack-on-titan/15",
  },
  {
    id: 2,
    animeTitle: "My Hero Academia",
    episodeTitle: "Deku vs. Kacchan",
    episodeImage: "/placeholder.svg?height=180&width=320",
    progress: { current: 7, total: 13 },
    url: "/watch/my-hero-academia/7",
  },
  {
    id: 3,
    animeTitle: "Demon Slayer",
    episodeTitle: "Mugen Train",
    episodeImage: "/placeholder.svg?height=180&width=320",
    progress: { current: 10, total: 26 },
    url: "/watch/demon-slayer/10",
  },
  {
    id: 4,
    animeTitle: "One Punch Man",
    episodeTitle: "The Strongest Man",
    episodeImage: "/placeholder.svg?height=180&width=320",
    progress: { current: 3, total: 12 },
    url: "/watch/one-punch-man/3",
  },
];

export default function ContinueWatching() {
  return (
    <div className="overflow-hidden">
      <h2 className="text-3xl max-md:text-2xl font-semibold border-l-8 border-ring px-5 mb-6">
        Continue Watching
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full px-10"
      >
        <CarouselContent>
          {continueWatchingList.map((anime) => (
            <CarouselItem
              key={anime.id}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <Card className="overflow-hidden transition-shadow hover:shadow-lg bg-background/30">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={anime.episodeImage}
                        alt={anime.episodeTitle}
                        width={320}
                        height={180}
                        className="w-full"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Link href={anime.url}>
                          <Button
                            size="lg"
                            variant="ghost"
                            className="text-white"
                          >
                            <PlayCircle className="mr-2 h-6 w-6" />
                            Resume
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1 truncate">
                        {anime.animeTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 truncate">
                        {anime.episodeTitle}
                      </p>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Episode {anime.progress.current}</span>
                        <span className="text-muted-foreground">
                          {anime.progress.total} episodes
                        </span>
                      </div>
                      <Progress
                        value={
                          (anime.progress.current / anime.progress.total) * 100
                        }
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
