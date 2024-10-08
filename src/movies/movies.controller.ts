import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MovieService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MovieService) {}

    @Get()
    getAll() :Movie[]{
        return this.movieService.getAll();
    }

    @Get("/search")
    search(@Query("name") queryMovieName: string){
        return "NULL";
    }

    @Get("/:id")
    getOneById(@Param("id") id: string) :Movie{
        return this.movieService.getOneById(id);
    }

    @Post()
    createMovie(@Body() movieData) {
        return this.movieService.create(movieData);
    }

    @Delete("/:id")
    deleteMovieById(@Param('id') id: string) {
        this.movieService.deleteById(id);
    }

    @Put('/:id')
    path(@Param('id') id:string, @Body() movieData) {
        return {
            updatedMovie: id,
            ...movieData
        };
    }
}
