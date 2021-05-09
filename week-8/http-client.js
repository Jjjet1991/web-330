/*<!--
=====================================================
; Title: Assignment 8.2 WhatABook Part 2
; Author: Professor Krasso
; Date 9 May 2021
; Modified By: Jourdan Neal
; Description: Using API fetch request. 
=====================================================
*/
 //Create HttpClient class
export class HttpClient
{

    //Create an async function called get with 2 parameters url and params
    async get(url, params=''){
        url = new URL(url);

    //new URLSearchParams object, supply params and assign to url.search property.
   url.search = new URLSearchParams(params);

   const res = await fetch(url.toString(), {
       method: "GET",
   })

   return res.json();

}
}