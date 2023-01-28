<?php

namespace Modules\SubCategories\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\SubCategories\Entities\SubCategory;
use Inertia\Inertia;

class SubCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('subcategories::index');
    }

    public function getSubCategoriesByCategoryId(Request $req)
    {
        $response = SubCategory::select('id as value', 'title as label')->where('category_id', $req->id)->get();
        return response()->json($response);
    }
}
