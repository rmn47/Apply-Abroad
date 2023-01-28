<?php

namespace Modules\Profile\Http\Controllers;

use App\Models\User;
use Modules\Education\Entities\Education;
use Modules\Score\Entities\Score;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Modules\Profile\Entities\Profile;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Modules\Background\Entities\Background;
use Modules\Document\Entities\Document;
use file;
use phpDocumentor\Reflection\Types\Nullable;

class ProfileController extends Controller
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

    public function index()
    {
        $user = User::find($this->USER_ID);
        return Inertia::render('profile/Profile', [
            "user" => $user
        ]);
    }
    public function update_profile(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable',
            'last_name' => 'nullable',
            'contact' => 'required',
            'date_of_birth' => 'required|date_format:Y-m-d',
            'citizenship' => 'required|string|max:255',
            'primary_language' => 'required|string|max:255',
            'passport_number' => 'required|string|max:255',
            'passport_expiry' => 'required|date_format:Y-m-d',
            'gender' => 'required',
            'marital_status' => 'nullable',
            'address' => 'required|string|max:2000',
            'city' => 'required',
            'zipcode' => 'required',
            'state' => 'required',
            'country' => 'required'
        ]);

        if ($validator->fails()) {
            return Redirect::back()
                ->withErrors($validator)
                ->withInput();
        }

        $this->USER->update($request->all());
        return Redirect::route('education_history');
    }

    public function education()
    {
        $user = Education::where('user_id', $this->USER_ID)->first();
        return Inertia::render('profile/Education', [
            "user" => $user
        ]);
    }
    public function update_education(Request $request, Education $education)
    {

        $input = Arr::only($request->all(), [
            'education_country_name',
            'high_education',
            'grading_scheme',
            'grade_average',
            'country_institute',
            'institute_name',
            'education_level',
            'primary_language',
            'attend_institution_from',
            'attend_institution_to',
            'degree_name',
            'education_check',
            'address',
            'city_town',
            'provience',
            'postal_zip',
            'graduation_date'

        ]);

        $rules = [
            'education_country_name' => 'required|string',
            'high_education' => 'required',
            'grading_scheme' => 'required',
            'grade_average' => 'required',
            'country_institute' => 'required|string',
            'institute_name' => 'required',
            'education_level' => 'required',
            'primary_language' => 'required',
            'attend_institution_from' => 'required',
            'attend_institution_to' => 'required',
            'degree_name' => 'required',
            'education_checkbox' => 'nullable',
            'graduation_date' => 'nullable',
            'address' => 'required',
            'city_town' => 'required',
            'provience' => 'required',
            'postal_zip' => 'required'
        ];
        $errorMessages = [];
        $validator = Validator::make($input, $rules, $errorMessages);
        if ($validator->fails()) {
            return Redirect::back()
                ->withErrors($validator)
                ->withInput();
        }

        $input['user_id'] = $this->USER_ID;
        // dd($input);
        Education::create($input);
        return Redirect::route('test_scores');
    }
    public function score()
    {
        // $user = Score::find($this->USER_ID);
        //  dd($user);
        $user = Score::where('user_id', $this->USER_ID)->first();
        return Inertia::render('profile/Score', [
            "user" => $user
        ]);
    }
    public function update_score(Request $request, Score $score)
    {
        $input = Arr::only($request->all(), [
            'english_exam_type',
            'date_of_exam',
            'listing',
            'reading',
            'writing',
            'speaking',
            'gre_exam_date',
            'gre_verval',
            'gre_quantative',
            'gre_writing',
            'gre_verval_rank',
            'gre_quantative_rank',
            'gre_writing_rank',
            'gmat_exam_date',
            'gmat_verval',
            'gmat_writing',
            'gmat_total',
            'gmat_verval_rank',
            'gmat_writing_rank',
            'gmat_total_rank'
        ]);

        $rules = [
            'english_exam_type' => 'required',
            'date_of_exam' => 'required|date_format:Y-m-d',
            'listing' => '',
            'reading' => '',
            'writing' => '',
            'speaking' => '',
            'gre_exam_date' => '',
            'gre_verval' => '',
            'gre_quantative' => '',
            'gre_writing' => '',
            'gre_verval_rank' => '',
            'gre_quantative_rank' => '',
            'gre_writing_rank' => '',
            'gmat_exam_date' => '',
            'gmat_verval' => '',
            'gmat_writing' => '',
            'gmat_total' => '',
            'gmat_verval_rank' => '',
            'gmat_writing_rank' => '',
            'gmat_total_rank' => ''
        ];
        $errorMessages = [];
        $validator = Validator::make($input, $rules, $errorMessages);
        if ($validator->fails()) {
            return Redirect::back()
                ->withErrors($validator)
                ->withInput();
        }

        $input['user_id'] = $this->USER_ID;
        // dd($input);
        Score::create($input);
        return Redirect::route('background_information');
    }
    public function documents()
    {
        $user = User::find($this->USER_ID);
        return Inertia::render('profile/Documents', [
            "user" => $user
        ]);
    }
    public function update_documents(Request $request, Document $document)
    {
        $input = Arr::only($request->all(), [
            'passport_photo'
        ]);

        $rules = [
            'passport_photo' => 'required'
        ];
        $errorMessages = [];
        $validator = Validator::make($input, $rules, $errorMessages);
        if ($validator->fails()) {
            return Redirect::back()
                ->withErrors($validator)
                ->withInput();
        }

        //   $name = $request->file('passport_photo')->getClientOriginalName();

        $path = $request->file('passport_photo')->storeAs('./public/img', '');

        $save = new Document;

        //    $save->passport_photo = $name;
        $save->passport_photo = $path;
        $save->user_id = $this->USER_ID;
        //return redirect('file-upload')->with('status', 'File Has been uploaded successfully in laravel 8');

        // $input['user_id'] = $this->USER_ID;
        // dd($input);
        //Document::create($input);
        return Redirect::route('documents');
    }

    public function background()
    {
        $user = Background::where('user_id', $this->USER_ID)->first();
        //   dd($user);
        return Inertia::render('profile/bgInformation', [
            "user" => $user
        ]);
    }

    public function update_background(Request $request, Background $background)
    {
        $input = Arr::only($request->all(), [
            'refusal_checkbox',
            'valid_permit_visa',
            'refusal_details'
        ]);

        $rules = [
            'refusal_checkbox' => '',
            'valid_permit_visa' => '',
            'refusal_details' => ''
        ];
        $errorMessages = [];
        $validator = Validator::make($input, $rules, $errorMessages);
        if ($validator->fails()) {
            return Redirect::back()
                ->withErrors($validator)
                ->withInput();
        }

        $input['user_id'] = $this->USER_ID;

        Background::create($input);
        return Redirect::route('background_information');
    }
}
