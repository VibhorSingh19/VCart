const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/vibhordb',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("DB connected..")})
.catch((err)=>{console.log(err);});

//Schema

const playlistSchema=new mongoose.Schema({
    name: String,
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type:Date,
        default: Date.now
    }
})

//model
const Playlist=new mongoose.model("Playlist",playlistSchema);
//Document

    const createDoc = async()=>{
        try{
        const  expressPlaylist= new Playlist({
            name: "Express",
            ctype: "backend",
            videos: 33,
            author: "Vibhor Singh",
            active: true,
            
        })
        const  DjangoPlaylist= new Playlist({
            name: "Django",
            ctype: "backend",
            videos: 33,
            author: "Vibhor Singh",
            active: true,
            
        })
        const  angularPlaylist= new Playlist({
            name: "Angular",
            ctype: "Frontend",
            videos: 33,
            author: "Vibhor Singh",
            active: true,
            
        })
        
        
        const data= await Playlist.insertMany([expressPlaylist,DjangoPlaylist,angularPlaylist]);
        console.log(data);
    }
    catch(err){
        console.log(err);
    }    
}

//createDoc();
const readDoc=async ()=>{
    try{
        const data = await Playlist.find({name:"React"}).select({name:1});
      console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
readDoc();