"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type MovieCardProps = {
  movie: {
    _id: number;
    title: string;
    genres: string[];
    year: number;
    runtime: number;
    imdb: {
      rating: number;
      votes: number;
    };
    poster: string;
  };
};

export default function MovieCard({ movie }: MovieCardProps) {
  const [posterUrl, setPosterUrl] = useState(movie.poster);

  return (
    <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 gap-2 transition-colors">
      <div className="aspect-2/3 w-full overflow-hidden">
        <Image
          src={posterUrl || "/placeholder.svg"}
          alt={movie.title}
          width={300}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          priority
          onError={() => setPosterUrl("/placeholder.svg")}
        />
      </div>

      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
        <p className="text-muted-foreground text-sm">
          {movie.year} . {movie.runtime} min
        </p>

        <div className="mt-2 flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre, index) => (
            <Badge
              key={`genre-${index}`}
              variant="outline"
              className="border-primary/30 bg-primary/5 text-xs rounded-sm"
            >
              {genre}
            </Badge>
          ))}

          {movie.genres.length > 2 && (
            <Badge
              variant="outline"
              className="border-primary/30 text-xs rounded-sm"
            >
              +{movie.genres.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="flex items-center">
          <span className="text-primary text-sm font-medium">
            | ⭐{movie.imdb.rating}/10
          </span>
        </div>

        <Button variant="ghost" size="sm" className="hover:text-primary">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
