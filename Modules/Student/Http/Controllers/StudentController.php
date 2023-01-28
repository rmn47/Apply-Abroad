<?php

namespace Modules\Student\Http\Controllers;

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

class StudentController extends Controller
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
        $background = Background::where('user_id', $this->USER_ID)->first();
        return Inertia::render('student/Eligibility', [
            "user" => $user, "background" => $background
        ]);
    }
    public function update_user(Request $request, User $user)
    {

        $validator = Validator::make($request->all(), [

            'citizenship' => 'required|string|max:255',
            'state' => 'required',
            'country' => 'required'
        ]);

        if ($validator->fails()) {
            return Redirect::back()
                ->withErrors($validator)
                ->withInput();
        }

        $this->USER->update($request->all());
        // return Redirect::route('education_history');
    }

    public function update_background(Request $request, Background $background)
    {
        $background = Background::where('user_id', $this->USER_ID)->first();
        if (empty($background)) {
            $input = Arr::only($request->all(), [
                'valid_permit_visa',
            ]);

            $rules = [
                'valid_permit_visa' => '',

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
            return Redirect::route('education');
        }
        // $input = Arr::only($request->all(), [
        //     'valid_permit_visa',
        // ]);

        // $rules = [
        //     'valid_permit_visa' => '',

        // ];

        // $errorMessages = [];
        // $validator = Validator::make($input, $rules, $errorMessages);
        // if ($validator->fails()) {
        //     return Redirect::back()
        //         ->withErrors($validator)
        //         ->withInput();
        // }

        // // $input['user_id'] = $this->USER_ID;
        // $this->Background->update($input);
        return Redirect::route('education');
    }
    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function education()
    {
        $user = Education::where('user_id', $this->USER_ID)->first();
        return Inertia::render('student/Eligibility education', [
            "user" => $user
        ]);
    }
    public function update_education(Request $request, Education $education)
    {
        $user = Education::where('user_id', $this->USER_ID)->first();
        if (empty($user)) {
            $input = Arr::only($request->all(), [
                'education_country_name',
                'high_education',
                'grading_scheme',
                'grade_average',
                'degree_name',

            ]);

            $rules = [
                'education_country_name' => 'required|string',
                'high_education' => 'required',
                'grading_scheme' => 'required',
                'grade_average' => 'required',
                'degree_name' => '',
            ];
            $errorMessages = [];
            $validator = Validator::make($input, $rules, $errorMessages);
            if ($validator->fails()) {
                return Redirect::back()
                    ->withErrors($validator)
                    ->withInput();
            }

            $input['user_id'] = $this->USER_ID;

            Education::create($input);
            return Redirect::route('test');
        }
        // $input = Arr::only($request->all(), [
        //     'education_country_name',
        //     'high_education',
        //     'grading_scheme',
        //     'grade_average',
        //     'degree_name',

        // ]);

        // $rules = [
        //     'education_country_name' => 'required|string',
        //     'high_education' => 'required',
        //     'grading_scheme' => 'required',
        //     'grade_average' => 'required',
        //     'degree_name' => '',
        // ];
        // $errorMessages = [];
        // $validator = Validator::make($input, $rules, $errorMessages);
        // if ($validator->fails()) {
        //     return Redirect::back()
        //         ->withErrors($validator)
        //         ->withInput();
        // }

        // // $input['user_id'] = $this->USER_ID;

        // $this->USER_ID->Education->update($input);
        return Redirect::route('test');
    }
    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function test()
    {
        $user = Score::where('user_id', $this->USER_ID)->first();
        return Inertia::render('student/Eligibility Testscore', [
            "user" => $user
        ]);
    }
    public function update_test(Request $request, Score $score)
    {
        $user = Score::where('user_id', $this->USER_ID)->first();
        if (empty($user)) {
            $input = Arr::only($request->all(), [
                'english_exam_type',
                'listing',
                'reading',
                'writing',
                'speaking',

            ]);

            $rules = [
                'english_exam_type' => 'required',
                'listing' => '',
                'reading' => '',
                'writing' => '',
                'speaking' => '',

            ];

            $errorMessages = [];
            $validator = Validator::make($input, $rules, $errorMessages);
            if ($validator->fails()) {
                return Redirect::back()
                    ->withErrors($validator)
                    ->withInput();
            }

            $input['user_id'] = $this->USER_ID;
            Score::create($input);
            return Redirect::route('dashboard');
        }
        // $input = Arr::only($request->all(), [
        //     'english_exam_type',
        //     'listing',
        //     'reading',
        //     'writing',
        //     'speaking',

        // ]);

        // $rules = [
        //     'english_exam_type' => 'required',
        //     'listing' => '',
        //     'reading' => '',
        //     'writing' => '',
        //     'speaking' => '',

        // ];

        // $errorMessages = [];
        // $validator = Validator::make($input, $rules, $errorMessages);
        // if ($validator->fails()) {
        //     return Redirect::back()
        //         ->withErrors($validator)
        //         ->withInput();
        // }

        // // $input['user_id'] = $this->USER_ID;
        // $this->USER_ID->Score->update($input);
        return Redirect::route('dashboard');
    }
    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */

    public function destroy($id)
    {
        //
    }
}
