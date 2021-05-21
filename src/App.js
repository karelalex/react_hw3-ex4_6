import './App.css';
import {
    AppBar, Box,
    Card,
    CardContent,
    Container,
    FormControl,
    Grid,
    InputLabel,
    makeStyles, MenuItem, Select,
    Typography
} from "@material-ui/core";
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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

const NewsItem = ({title, body, current}) => {
    const classes = useStyles();
    console.log(title, current)
    return (
        <>
        {(current === title) && (
            <Grid item>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">{title}</Typography>
                    <Typography variant="body2" component="p">{body}</Typography>
                </CardContent>
            </Card>
        </Grid>)
        }
        </>
    )
}

function Layout({animal, setAnimal}) {
    const classes = useStyles();
    return (
        <div className="App">
            <Container maxWidth="xs">
                <AppBar position="static">
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                </AppBar>
                <Box className={classes.card}><FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Жывотное</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                    >
                        {data.map((item) => (<MenuItem value={item.title}>{item.title}</MenuItem>))}
                    </Select>
                </FormControl>
                </Box>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            {data.map((item) => <NewsItem title={item.title} body={item.body} key={item.title} current={animal}/>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

class App extends React.Component {
    state = {
        animal: data[0].title
    }
    setAnimal = (animal) => {
        this.setState({animal});
    }

    render() {
        return (
            <Layout animal={this.state.animal} setAnimal={this.setAnimal}/>
        );
    }
}

export default App;
