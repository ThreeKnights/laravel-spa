<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Validator;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{

    public function validateRules ($id = ""){
        return [
            'title' => 'required',
            'body' => 'required'
        ];
    }
    public function home () {
        return view('vueApp');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = Post::orderBy('id','DESC')->get();
        return $post;

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),$this->validateRules());
        $success = false;
        if($validator->fails()){
            return response()->json([
                'success' => $success,
                'errors' => $validator->message(),
                'message' => "Something went wrong. Counld now saved "
            ],200);
        }
        $post = new Post;
        DB::transaction(function () use($request, &$post, &$success) {
            $post->fill($request->all());
            $success = $post->save();
        });
        return response()->json([
            'success' => $success,
            'data' => ($success) ? $post : null,
            'message' => ($success) ? 'Post saved successfully' : 'Something went wrong'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
