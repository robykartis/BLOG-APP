<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Marketing\UpdateRequest;
use App\Models\Marketing;
use Illuminate\Http\Request;

class MarketingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth_access', ['except' => ['index']]);
    }
    public function index()
    {
        $data = Marketing::all();
        try {
            return response()->json([
                'status' => true,
                'message' => 'success',
                'data' => $data,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'error',
                'message' => $th->getMessage(),
            ], 500);
        }
    }
    public function show($id)
    {
        $data = Marketing::find($id);
        try {
            return response()->json([
                'status' => true,
                'message' => 'success',
                'data' => $data,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'error',
                'message' => $th->getMessage(),
            ], 500);
        }
    }
    public function update(UpdateRequest $request, $id)
    {
        try {
            $marketing = Marketing::find($id);
            if (!$marketing) {
                return response()->json([
                    'status' => false,
                    'message' => 'data not found',
                ], 404);
            }
            $marketing->fill($request->all());
            $marketing->save();
            return response()->json([
                'status' => true,
                'message' => 'success',
                'data' => $marketing,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
