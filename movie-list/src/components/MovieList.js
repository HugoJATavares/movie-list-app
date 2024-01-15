import React from 'react'
import { Container, Grid } from '@mui/material'
import MovieListItem from "./MovieListItem";

export default function MovieList(props) {
    const { data = [], handleAddToList, handleRemoveFromList, savedMoviesMap = {} } = props;
    
    return (
        <Container maxWidth='xl' sx={{ pt: 2 }}>
            <Grid container spacing={2}>
                {data.map((d) => {
                    const addedToList = savedMoviesMap[d.imdbID] ? true : false;

                    return (
                        <Grid item xs={12} md={6} lg={4} xl={3}
                            key={d.imdbID}>
                            <MovieListItem title={d.title} year={d.year}
                                imdbID={d.imdbID} poster={d.poster} type={d.type} handleAddToList={handleAddToList}
                                action={addedToList ? "remove" : "add"}
                                handleRemoveFromList={handleRemoveFromList}
                            />

                        </Grid>

                    )
                })}
            </Grid>
        </Container>
    )
}
