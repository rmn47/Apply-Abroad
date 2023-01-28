<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('olderThan', function ($attribute, $value, $parameters) {
            $minAge = (!empty($parameters)) ? (int) $parameters[0] : 13;
            return \Carbon\Carbon::now()->diff(new \Carbon\Carbon($value))->y >= $minAge;
        });
        Validator::replacer('olderThan', function ($message, $attribute, $rule, $parameters) {
            return str_replace(':date_of_birth', $parameters[0] ?? 13, $message);
        });
    }
}
