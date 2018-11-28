var data = {lines:[
{"lineNum":"    1","line":"// Allocator traits -*- C++ -*-"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"// Copyright (C) 2011-2017 Free Software Foundation, Inc."},
{"lineNum":"    4","line":"//"},
{"lineNum":"    5","line":"// This file is part of the GNU ISO C++ Library.  This library is free"},
{"lineNum":"    6","line":"// software; you can redistribute it and/or modify it under the"},
{"lineNum":"    7","line":"// terms of the GNU General Public License as published by the"},
{"lineNum":"    8","line":"// Free Software Foundation; either version 3, or (at your option)"},
{"lineNum":"    9","line":"// any later version."},
{"lineNum":"   10","line":""},
{"lineNum":"   11","line":"// This library is distributed in the hope that it will be useful,"},
{"lineNum":"   12","line":"// but WITHOUT ANY WARRANTY; without even the implied warranty of"},
{"lineNum":"   13","line":"// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the"},
{"lineNum":"   14","line":"// GNU General Public License for more details."},
{"lineNum":"   15","line":""},
{"lineNum":"   16","line":"// Under Section 7 of GPL version 3, you are granted additional"},
{"lineNum":"   17","line":"// permissions described in the GCC Runtime Library Exception, version"},
{"lineNum":"   18","line":"// 3.1, as published by the Free Software Foundation."},
{"lineNum":"   19","line":""},
{"lineNum":"   20","line":"// You should have received a copy of the GNU General Public License and"},
{"lineNum":"   21","line":"// a copy of the GCC Runtime Library Exception along with this program;"},
{"lineNum":"   22","line":"// see the files COPYING3 and COPYING.RUNTIME respectively.  If not, see"},
{"lineNum":"   23","line":"// <http://www.gnu.org/licenses/>."},
{"lineNum":"   24","line":""},
{"lineNum":"   25","line":"/** @file ext/alloc_traits.h"},
{"lineNum":"   26","line":" *  This file is a GNU extension to the Standard C++ Library."},
{"lineNum":"   27","line":" */"},
{"lineNum":"   28","line":""},
{"lineNum":"   29","line":"#ifndef _EXT_ALLOC_TRAITS_H"},
{"lineNum":"   30","line":"#define _EXT_ALLOC_TRAITS_H 1"},
{"lineNum":"   31","line":""},
{"lineNum":"   32","line":"#pragma GCC system_header"},
{"lineNum":"   33","line":""},
{"lineNum":"   34","line":"#if __cplusplus >= 201103L"},
{"lineNum":"   35","line":"# include <bits/move.h>"},
{"lineNum":"   36","line":"# include <bits/alloc_traits.h>"},
{"lineNum":"   37","line":"#else"},
{"lineNum":"   38","line":"# include <bits/allocator.h>  // for __alloc_swap"},
{"lineNum":"   39","line":"#endif"},
{"lineNum":"   40","line":""},
{"lineNum":"   41","line":"namespace __gnu_cxx _GLIBCXX_VISIBILITY(default)"},
{"lineNum":"   42","line":"{"},
{"lineNum":"   43","line":"_GLIBCXX_BEGIN_NAMESPACE_VERSION"},
{"lineNum":"   44","line":""},
{"lineNum":"   45","line":"/**"},
{"lineNum":"   46","line":" * @brief  Uniform interface to C++98 and C++11 allocators."},
{"lineNum":"   47","line":" * @ingroup allocators"},
{"lineNum":"   48","line":"*/"},
{"lineNum":"   49","line":"template<typename _Alloc>"},
{"lineNum":"   50","line":"  struct __alloc_traits"},
{"lineNum":"   51","line":"#if __cplusplus >= 201103L"},
{"lineNum":"   52","line":"  : std::allocator_traits<_Alloc>"},
{"lineNum":"   53","line":"#endif"},
{"lineNum":"   54","line":"  {"},
{"lineNum":"   55","line":"    typedef _Alloc allocator_type;"},
{"lineNum":"   56","line":"#if __cplusplus >= 201103L"},
{"lineNum":"   57","line":"    typedef std::allocator_traits<_Alloc>           _Base_type;"},
{"lineNum":"   58","line":"    typedef typename _Base_type::value_type         value_type;"},
{"lineNum":"   59","line":"    typedef typename _Base_type::pointer            pointer;"},
{"lineNum":"   60","line":"    typedef typename _Base_type::const_pointer      const_pointer;"},
{"lineNum":"   61","line":"    typedef typename _Base_type::size_type          size_type;"},
{"lineNum":"   62","line":"    typedef typename _Base_type::difference_type    difference_type;"},
{"lineNum":"   63","line":"    // C++11 allocators do not define reference or const_reference"},
{"lineNum":"   64","line":"    typedef value_type&                             reference;"},
{"lineNum":"   65","line":"    typedef const value_type&                       const_reference;"},
{"lineNum":"   66","line":"    using _Base_type::allocate;"},
{"lineNum":"   67","line":"    using _Base_type::deallocate;"},
{"lineNum":"   68","line":"    using _Base_type::construct;"},
{"lineNum":"   69","line":"    using _Base_type::destroy;"},
{"lineNum":"   70","line":"    using _Base_type::max_size;"},
{"lineNum":"   71","line":""},
{"lineNum":"   72","line":"  private:"},
{"lineNum":"   73","line":"    template<typename _Ptr>"},
{"lineNum":"   74","line":"      using __is_custom_pointer"},
{"lineNum":"   75","line":"\t= std::__and_<std::is_same<pointer, _Ptr>,"},
{"lineNum":"   76","line":"\t\t      std::__not_<std::is_pointer<_Ptr>>>;"},
{"lineNum":"   77","line":""},
{"lineNum":"   78","line":"  public:"},
{"lineNum":"   79","line":"    // overload construct for non-standard pointer types"},
{"lineNum":"   80","line":"    template<typename _Ptr, typename... _Args>"},
{"lineNum":"   81","line":"      static typename std::enable_if<__is_custom_pointer<_Ptr>::value>::type"},
{"lineNum":"   82","line":"      construct(_Alloc& __a, _Ptr __p, _Args&&... __args)"},
{"lineNum":"   83","line":"      {"},
{"lineNum":"   84","line":"\t_Base_type::construct(__a, std::addressof(*__p),"},
{"lineNum":"   85","line":"\t\t\t      std::forward<_Args>(__args)...);"},
{"lineNum":"   86","line":"      }"},
{"lineNum":"   87","line":""},
{"lineNum":"   88","line":"    // overload destroy for non-standard pointer types"},
{"lineNum":"   89","line":"    template<typename _Ptr>"},
{"lineNum":"   90","line":"      static typename std::enable_if<__is_custom_pointer<_Ptr>::value>::type"},
{"lineNum":"   91","line":"      destroy(_Alloc& __a, _Ptr __p)"},
{"lineNum":"   92","line":"      { _Base_type::destroy(__a, std::addressof(*__p)); }"},
{"lineNum":"   93","line":""},
{"lineNum":"   94","line":"    static _Alloc _S_select_on_copy(const _Alloc& __a)","class":"lineCov","hits":"2","order":"1080","possible_hits":"2",},
{"lineNum":"   95","line":"    { return _Base_type::select_on_container_copy_construction(__a); }","class":"linePartCov","hits":"1","order":"1081","possible_hits":"2",},
{"lineNum":"   96","line":""},
{"lineNum":"   97","line":"    static void _S_on_swap(_Alloc& __a, _Alloc& __b)"},
{"lineNum":"   98","line":"    { std::__alloc_on_swap(__a, __b); }"},
{"lineNum":"   99","line":""},
{"lineNum":"  100","line":"    static constexpr bool _S_propagate_on_copy_assign()"},
{"lineNum":"  101","line":"    { return _Base_type::propagate_on_container_copy_assignment::value; }"},
{"lineNum":"  102","line":""},
{"lineNum":"  103","line":"    static constexpr bool _S_propagate_on_move_assign()"},
{"lineNum":"  104","line":"    { return _Base_type::propagate_on_container_move_assignment::value; }"},
{"lineNum":"  105","line":""},
{"lineNum":"  106","line":"    static constexpr bool _S_propagate_on_swap()"},
{"lineNum":"  107","line":"    { return _Base_type::propagate_on_container_swap::value; }"},
{"lineNum":"  108","line":""},
{"lineNum":"  109","line":"    static constexpr bool _S_always_equal()"},
{"lineNum":"  110","line":"    { return _Base_type::is_always_equal::value; }"},
{"lineNum":"  111","line":""},
{"lineNum":"  112","line":"    static constexpr bool _S_nothrow_move()"},
{"lineNum":"  113","line":"    { return _S_propagate_on_move_assign() || _S_always_equal(); }"},
{"lineNum":"  114","line":""},
{"lineNum":"  115","line":"    template<typename _Tp>"},
{"lineNum":"  116","line":"      struct rebind"},
{"lineNum":"  117","line":"      { typedef typename _Base_type::template rebind_alloc<_Tp> other; };"},
{"lineNum":"  118","line":"#else"},
{"lineNum":"  119","line":""},
{"lineNum":"  120","line":"    typedef typename _Alloc::pointer                pointer;"},
{"lineNum":"  121","line":"    typedef typename _Alloc::const_pointer          const_pointer;"},
{"lineNum":"  122","line":"    typedef typename _Alloc::value_type             value_type;"},
{"lineNum":"  123","line":"    typedef typename _Alloc::reference              reference;"},
{"lineNum":"  124","line":"    typedef typename _Alloc::const_reference        const_reference;"},
{"lineNum":"  125","line":"    typedef typename _Alloc::size_type              size_type;"},
{"lineNum":"  126","line":"    typedef typename _Alloc::difference_type        difference_type;"},
{"lineNum":"  127","line":""},
{"lineNum":"  128","line":"    static pointer"},
{"lineNum":"  129","line":"    allocate(_Alloc& __a, size_type __n)"},
{"lineNum":"  130","line":"    { return __a.allocate(__n); }"},
{"lineNum":"  131","line":""},
{"lineNum":"  132","line":"    static void deallocate(_Alloc& __a, pointer __p, size_type __n)"},
{"lineNum":"  133","line":"    { __a.deallocate(__p, __n); }"},
{"lineNum":"  134","line":""},
{"lineNum":"  135","line":"    template<typename _Tp>"},
{"lineNum":"  136","line":"      static void construct(_Alloc& __a, pointer __p, const _Tp& __arg)"},
{"lineNum":"  137","line":"      { __a.construct(__p, __arg); }"},
{"lineNum":"  138","line":""},
{"lineNum":"  139","line":"    static void destroy(_Alloc& __a, pointer __p)"},
{"lineNum":"  140","line":"    { __a.destroy(__p); }"},
{"lineNum":"  141","line":""},
{"lineNum":"  142","line":"    static size_type max_size(const _Alloc& __a)"},
{"lineNum":"  143","line":"    { return __a.max_size(); }"},
{"lineNum":"  144","line":""},
{"lineNum":"  145","line":"    static const _Alloc& _S_select_on_copy(const _Alloc& __a) { return __a; }"},
{"lineNum":"  146","line":""},
{"lineNum":"  147","line":"    static void _S_on_swap(_Alloc& __a, _Alloc& __b)"},
{"lineNum":"  148","line":"    {"},
{"lineNum":"  149","line":"      // _GLIBCXX_RESOLVE_LIB_DEFECTS"},
{"lineNum":"  150","line":"      // 431. Swapping containers with unequal allocators."},
{"lineNum":"  151","line":"      std::__alloc_swap<_Alloc>::_S_do_it(__a, __b);"},
{"lineNum":"  152","line":"    }"},
{"lineNum":"  153","line":""},
{"lineNum":"  154","line":"    template<typename _Tp>"},
{"lineNum":"  155","line":"      struct rebind"},
{"lineNum":"  156","line":"      { typedef typename _Alloc::template rebind<_Tp>::other other; };"},
{"lineNum":"  157","line":"#endif"},
{"lineNum":"  158","line":"  };"},
{"lineNum":"  159","line":""},
{"lineNum":"  160","line":"_GLIBCXX_END_NAMESPACE_VERSION"},
{"lineNum":"  161","line":"} // namespace __gnu_cxx"},
{"lineNum":"  162","line":""},
{"lineNum":"  163","line":"#endif"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "mipl_parser", "date" : "2018-11-28 14:11:03", "instrumented" : 2, "covered" : 2,};
var merged_data = [];
