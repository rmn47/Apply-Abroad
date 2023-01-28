<?php

namespace Modules\Dashboard\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Modules\Profile\Http\Controllers\ProfileController;
use Inertia\Inertia;
use Modules\Background\Entities\Background;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Redirect;
use Modules\Schools\Entities\Userprogram;
use Modules\Score\Entities\Score;

class DashboardController extends Controller
{
    protected $USER;
    protected $USER_ID;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->USER = Auth::user();
            $this->USER_ID = $this->USER->id ?? null;
            return $next($request);
        });
    }
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        // $id = Auth::id();
        $user = Background::where('user_id', $this->USER_ID)->first();
        $userprogram = Userprogram::where('user_id', $this->USER_ID)->get();
        $score = Score::where('user_id', $this->USER_ID)->first();
        return Inertia::render('Dashboard', [
            "user" => $user, "score" => $score, "userprogram" => $userprogram
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function application()
    {
        $userprogram = Userprogram::where('user_id', $this->USER_ID)->get();
        $paiduserprogram = Userprogram::where('user_id', $this->USER_ID && 'amount_paid' != null)->get();
        return Inertia::render('Applications', [
            "userprogram" => $userprogram
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */

    public function destroy($id)
    {
        $deleteUserprogram = Userprogram::where('id', $id);
        $deleteUserprogram->delete();
        return Redirect::route('applications');
    }
}
