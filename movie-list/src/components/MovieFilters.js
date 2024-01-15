import React, { useState } from 'react'
import { Button, Container, Box, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function MovieFilters(props) {
    const { handleSearchMovies } = props;
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Please provide a movie title");
            return;
        }
        handleSearchMovies({ s: title })
    }
    return (
        <Container maxWidth='xl' sx={{ pt: 2 }}>
            <Box component="form" sx={{ display: "flex", alignItems: "flex-end" }} onSubmit={handleSubmit}>
                <TextField
                    label="Movie Title"
                    variant="standard"
                    fullWidth
                    sx={{
                        mr: 1,
                        '&:hover': {
                            color: 'grey',
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'black',        
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'grey', 
                            fontWeight: 'bold',

                        },
                    }}
                    size="small"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Button
                    sx={{
                        minWidth: "100px",
                        color: "grey",
                        border: "2px solid grey",
                        '&:hover': {
                            color: 'grey',
                            border: "2px solid grey",
                        },
                        '&:focus': {
                            color: 'grey',
                            border: "2px solid grey",
                        },
                    }}
                    type="submit"
                    startIcon={<Search />}
                    variant="outlined"
                >
                    Search
                </Button>
            </Box>
        </Container>

    )
}
