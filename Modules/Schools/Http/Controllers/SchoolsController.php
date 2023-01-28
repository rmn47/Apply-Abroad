<?php

namespace Modules\Schools\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Arr;
use Modules\Background\Entities\Background;
use Modules\Background\Entities\validVisaPermit;
use Modules\Categories\Entities\Category;
use Modules\Education\Entities\Education;
use Modules\Intake\Entities\Intake;
use Modules\Schools\Entities\School;
use Modules\Schools\Entities\Userprogram;
use Modules\Schools\Entities\Country;
use Modules\Schools\Entities\Program;
use Modules\Schools\Entities\Program_level;
use Modules\Schools\Entities\schoolPrograms;
use Modules\Schools\Entities\studyCountry;
use Modules\Score\Entities\EngExamType;
use Modules\Score\Entities\Score;
use Modules\SubCategories\Entities\SubCategory;
use Modules\SubCategories\Entities\substudymodel;

class SchoolsController extends Controller
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
        $schools = schoolPrograms::whereStatus('Active')->get();
        $country = Country::select('id as value', 'name as label')->where('deleted_at', null)->get();
        $studycountry = studyCountry::select('id as value', 'title as label')->where('deleted_at', null)->get();
        $background = validVisaPermit::select('id as value', 'title as label')->where('deleted_at', null)->get();
        $userbackground = Background::select('id as value', 'valid_permit_visa as label')->where('user_id', $this->USER_ID)->get();
        $educationCountry = Education::select('id as value', 'education_country_name as label')->where('user_id', $this->USER_ID)->get();
        $educationLevel = Education::select('id as value', 'education_level as label')->where('user_id', $this->USER_ID)->get();
        $gradingScheme = Education::select('id as value', 'grading_scheme as label')->where('user_id', $this->USER_ID)->get();
        $gradingAverage = Education::select('id as value', 'grade_average as label')->where('user_id', $this->USER_ID)->get();
        $englishExamtype = EngExamType::select('id as value', 'title as label')->where('deleted_at', null)->get();
        $userenglishExamtype = Score::select('id as value', 'english_exam_type as label')->where('user_id', $this->USER_ID)->get();
        $nationality = User::select('id as value', 'citizenship as label')->where('id', $this->USER_ID)->get();
        $userstate = User::select('id as value', 'state as label')->where('id', $this->USER_ID)->get();
        $state = School::select('id as value', 'location as label')->where('deleted_at', null)->get();
        $Program_level = Program_level::select('id as value', 'label')->where('deleted_at', null)->get();
        $intake = Intake::select('id as value', 'label')->where('deleted_at', null)->get();
        $category = Category::select('id as value', 'title as label')->where('deleted_at', null)->get();
        $Subcategory = SubCategory::select('id as value', 'title as label')->where('deleted_at', null)->get();
        $SubStudy = substudymodel::select('id as value', 'title as label')->where('deleted_at', null)->get();
        return Inertia::render('Search', ['schools' => $schools, 'studycountry' => $studycountry, 'gradingScheme' => $gradingScheme, 'SubStudy' => $SubStudy, 'englishExamtype' => $englishExamtype, 'userenglishExamtype' => $userenglishExamtype, 'gradingAverage' => $gradingAverage, 'educationLevel' => $educationLevel, 'educationCountry' => $educationCountry, 'userstate' => $userstate, 'nationality' => $nationality, 'userbackground' => $userbackground, 'background' => $background, 'Program_level' => $Program_level, 'state' => $state, 'country' => $country, 'intakes' => $intake, 'category' => $category, 'Subcategory' => $Subcategory]);
    }
    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function details($id)
    {
        $schools = School::where('id', $id)->get();
        $programs = Program::where('institute_id', $id)->get();
        $programs_count = Program::where('institute_id', $id)->count();
        return Inertia::render('Detail', ['schools' => $schools, 'programs' => $programs, 'programs_count' => $programs_count]);
    }
    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function programdetails($id)
    {
        $programs = Program::where('id', $id)->get();
        $schools = Program::where('institute_id', $id)->get();
        return Inertia::render('Program', ['schools' => $schools, 'programs' => $programs]);
    }
    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('schools::create');
    }
    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function set_user_program(Request $request, $id)
    {
        $input['program_id'] = $id;
        $input['user_id'] = $this->USER_ID;
        // dd($input);
        Userprogram::create($input);
        return Redirect::route('dashboard');
    }
    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('schools::show');
    }
    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('schools::edit');
    }
    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
