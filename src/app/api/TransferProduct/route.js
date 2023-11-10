import { NextRequest } from "next/server"



export const POST= async (req,res) =>{
    console.log('post method HGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG')
    return NextRequest.json({
        massage:'post method is working',
        method:'post'

    })
}