const notesRouter=require('express').Router()
const Note=require('../models/note')

notesRouter.get('/',(requset,response)=>{
    Note.find({}).then(notes=>{
        response.json(notes)
    })
})

notesRouter.get('/:id',(request,response,next)=>{
    Note.findById(request.params.id).then(note=>{
        if (note) {
            return response.json(note)
        }
        else
        {
            response.status(404).end()
        }
    })
        .catch(error=>next(error))
})

notesRouter.post('/',(requset,response,next)=>{
    const body=requset.body

    const note=new Note({
        content:body.content,
        date:new Date(),
        importent:body.importent || false
    })
    note.save()
        .then(savedNote => {
            response.json(savedNote)
        })
        .catch(error => next(error))
})

notesRouter.delete('/:id',(request,response,next)=>{
    Note.findByIdAndRemove(request.params.id)
        .then(()=>{
            response.status(204).end()
        })
        .catch(error=>next(error))
})

notesRouter.put('/:id',(request,response,next)=>{
    const body=request.body

    const note={
        content:body.content,
        important:body.important
    }

    Note.findByIdAndUpdate(request.params.id,note,{new:true})
        .then(updatedNote=>{
            response.json(updatedNote)
        })
        .catch(error=>next(error))
})


module.exports=notesRouter
