import './App.css';
import {AppBar, Card, CardContent, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 25,
    },
    card: {
        minWidth: 75,
        maxWidth: 150
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const data = [
    {
        title: 'Кошечки',
        body: 'Это очень милые и умные животные, их можно гладить, но не надо дергать за хвост'
    },
    {
        title: 'Собачки',
        body: 'Умеют лаять на прохожих и приносить палочку. За ними надо убирать каки на улице'
    },
    {
        title: 'Хомячки',
        body: 'Живут дома в клетках. Бегают весь день по колесу и жрут'
    },
    {
        title: 'Слоны',
        body: 'Они очень большие и в квартиру не помещаются, поэтому живут в зоопарках'
    }
]

const NewsItem = ({title, body}) => {
    const classes = useStyles();
    return (
        <Grid item>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">{title}</Typography>
                    <Typography variant="body2" component="p">{body}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Container maxWidth="xs">
                <AppBar position="static">
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                </AppBar>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            {data.map((item) => <NewsItem title={item.title} body={item.body} key={item.title}/>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
