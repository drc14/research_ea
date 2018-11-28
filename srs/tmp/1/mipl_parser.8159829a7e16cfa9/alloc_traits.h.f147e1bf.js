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
{"lineNum":"   25","line":"/** @file bits/alloc_traits.h"},
{"lineNum":"   26","line":" *  This is an internal header file, included by other library headers."},
{"lineNum":"   27","line":" *  Do not attempt to use it directly. @headername{memory}"},
{"lineNum":"   28","line":" */"},
{"lineNum":"   29","line":""},
{"lineNum":"   30","line":"#ifndef _ALLOC_TRAITS_H"},
{"lineNum":"   31","line":"#define _ALLOC_TRAITS_H 1"},
{"lineNum":"   32","line":""},
{"lineNum":"   33","line":"#if __cplusplus >= 201103L"},
{"lineNum":"   34","line":""},
{"lineNum":"   35","line":"#include <bits/memoryfwd.h>"},
{"lineNum":"   36","line":"#include <bits/ptr_traits.h>"},
{"lineNum":"   37","line":"#include <ext/numeric_traits.h>"},
{"lineNum":"   38","line":""},
{"lineNum":"   39","line":"#define __cpp_lib_allocator_traits_is_always_equal 201411"},
{"lineNum":"   40","line":""},
{"lineNum":"   41","line":"namespace std _GLIBCXX_VISIBILITY(default)"},
{"lineNum":"   42","line":"{"},
{"lineNum":"   43","line":"_GLIBCXX_BEGIN_NAMESPACE_VERSION"},
{"lineNum":"   44","line":""},
{"lineNum":"   45","line":"  struct __allocator_traits_base"},
{"lineNum":"   46","line":"  {"},
{"lineNum":"   47","line":"    template<typename _Tp, typename _Up, typename = void>"},
{"lineNum":"   48","line":"      struct __rebind : __replace_first_arg<_Tp, _Up> { };"},
{"lineNum":"   49","line":""},
{"lineNum":"   50","line":"    template<typename _Tp, typename _Up>"},
{"lineNum":"   51","line":"      struct __rebind<_Tp, _Up,"},
{"lineNum":"   52","line":"\t\t      __void_t<typename _Tp::template rebind<_Up>::other>>"},
{"lineNum":"   53","line":"      { using type = typename _Tp::template rebind<_Up>::other; };"},
{"lineNum":"   54","line":""},
{"lineNum":"   55","line":"  protected:"},
{"lineNum":"   56","line":"    template<typename _Tp>"},
{"lineNum":"   57","line":"      using __pointer = typename _Tp::pointer;"},
{"lineNum":"   58","line":"    template<typename _Tp>"},
{"lineNum":"   59","line":"      using __c_pointer = typename _Tp::const_pointer;"},
{"lineNum":"   60","line":"    template<typename _Tp>"},
{"lineNum":"   61","line":"      using __v_pointer = typename _Tp::void_pointer;"},
{"lineNum":"   62","line":"    template<typename _Tp>"},
{"lineNum":"   63","line":"      using __cv_pointer = typename _Tp::const_void_pointer;"},
{"lineNum":"   64","line":"    template<typename _Tp>"},
{"lineNum":"   65","line":"      using __pocca = typename _Tp::propagate_on_container_copy_assignment;"},
{"lineNum":"   66","line":"    template<typename _Tp>"},
{"lineNum":"   67","line":"      using __pocma = typename _Tp::propagate_on_container_move_assignment;"},
{"lineNum":"   68","line":"    template<typename _Tp>"},
{"lineNum":"   69","line":"      using __pocs = typename _Tp::propagate_on_container_swap;"},
{"lineNum":"   70","line":"    template<typename _Tp>"},
{"lineNum":"   71","line":"      using __equal = typename _Tp::is_always_equal;"},
{"lineNum":"   72","line":"  };"},
{"lineNum":"   73","line":""},
{"lineNum":"   74","line":"  template<typename _Alloc, typename _Up>"},
{"lineNum":"   75","line":"    using __alloc_rebind"},
{"lineNum":"   76","line":"      = typename __allocator_traits_base::template __rebind<_Alloc, _Up>::type;"},
{"lineNum":"   77","line":""},
{"lineNum":"   78","line":"  /**"},
{"lineNum":"   79","line":"   * @brief  Uniform interface to all allocator types."},
{"lineNum":"   80","line":"   * @ingroup allocators"},
{"lineNum":"   81","line":"  */"},
{"lineNum":"   82","line":"  template<typename _Alloc>"},
{"lineNum":"   83","line":"    struct allocator_traits : __allocator_traits_base"},
{"lineNum":"   84","line":"    {"},
{"lineNum":"   85","line":"      /// The allocator type"},
{"lineNum":"   86","line":"      typedef _Alloc allocator_type;"},
{"lineNum":"   87","line":"      /// The allocated type"},
{"lineNum":"   88","line":"      typedef typename _Alloc::value_type value_type;"},
{"lineNum":"   89","line":""},
{"lineNum":"   90","line":"      /**"},
{"lineNum":"   91","line":"       * @brief   The allocator\'s pointer type."},
{"lineNum":"   92","line":"       *"},
{"lineNum":"   93","line":"       * @c Alloc::pointer if that type exists, otherwise @c value_type*"},
{"lineNum":"   94","line":"      */"},
{"lineNum":"   95","line":"      using pointer = __detected_or_t<value_type*, __pointer, _Alloc>;"},
{"lineNum":"   96","line":""},
{"lineNum":"   97","line":"    private:"},
{"lineNum":"   98","line":"      // Select _Func<_Alloc> or pointer_traits<pointer>::rebind<_Tp>"},
{"lineNum":"   99","line":"      template<template<typename> class _Func, typename _Tp, typename = void>"},
{"lineNum":"  100","line":"\tstruct _Ptr"},
{"lineNum":"  101","line":"\t{"},
{"lineNum":"  102","line":"\t  using type = typename pointer_traits<pointer>::template rebind<_Tp>;"},
{"lineNum":"  103","line":"\t};"},
{"lineNum":"  104","line":""},
{"lineNum":"  105","line":"      template<template<typename> class _Func, typename _Tp>"},
{"lineNum":"  106","line":"\tstruct _Ptr<_Func, _Tp, __void_t<_Func<_Alloc>>>"},
{"lineNum":"  107","line":"\t{"},
{"lineNum":"  108","line":"\t  using type = _Func<_Alloc>;"},
{"lineNum":"  109","line":"\t};"},
{"lineNum":"  110","line":""},
{"lineNum":"  111","line":"      // Select _A2::difference_type or pointer_traits<_Ptr>::difference_type"},
{"lineNum":"  112","line":"      template<typename _A2, typename _PtrT, typename = void>"},
{"lineNum":"  113","line":"\tstruct _Diff"},
{"lineNum":"  114","line":"\t{ using type = typename pointer_traits<_PtrT>::difference_type; };"},
{"lineNum":"  115","line":""},
{"lineNum":"  116","line":"      template<typename _A2, typename _PtrT>"},
{"lineNum":"  117","line":"\tstruct _Diff<_A2, _PtrT, __void_t<typename _A2::difference_type>>"},
{"lineNum":"  118","line":"\t{ using type = typename _A2::difference_type; };"},
{"lineNum":"  119","line":""},
{"lineNum":"  120","line":"      // Select _A2::size_type or make_unsigned<_DiffT>::type"},
{"lineNum":"  121","line":"      template<typename _A2, typename _DiffT, typename = void>"},
{"lineNum":"  122","line":"\tstruct _Size : make_unsigned<_DiffT> { };"},
{"lineNum":"  123","line":""},
{"lineNum":"  124","line":"      template<typename _A2, typename _DiffT>"},
{"lineNum":"  125","line":"\tstruct _Size<_A2, _DiffT, __void_t<typename _A2::size_type>>"},
{"lineNum":"  126","line":"\t{ using type = typename _A2::size_type; };"},
{"lineNum":"  127","line":""},
{"lineNum":"  128","line":"    public:"},
{"lineNum":"  129","line":"      /**"},
{"lineNum":"  130","line":"       * @brief   The allocator\'s const pointer type."},
{"lineNum":"  131","line":"       *"},
{"lineNum":"  132","line":"       * @c Alloc::const_pointer if that type exists, otherwise"},
{"lineNum":"  133","line":"       * <tt> pointer_traits<pointer>::rebind<const value_type> </tt>"},
{"lineNum":"  134","line":"      */"},
{"lineNum":"  135","line":"      using const_pointer = typename _Ptr<__c_pointer, const value_type>::type;"},
{"lineNum":"  136","line":""},
{"lineNum":"  137","line":"      /**"},
{"lineNum":"  138","line":"       * @brief   The allocator\'s void pointer type."},
{"lineNum":"  139","line":"       *"},
{"lineNum":"  140","line":"       * @c Alloc::void_pointer if that type exists, otherwise"},
{"lineNum":"  141","line":"       * <tt> pointer_traits<pointer>::rebind<void> </tt>"},
{"lineNum":"  142","line":"      */"},
{"lineNum":"  143","line":"      using void_pointer = typename _Ptr<__v_pointer, void>::type;"},
{"lineNum":"  144","line":""},
{"lineNum":"  145","line":"      /**"},
{"lineNum":"  146","line":"       * @brief   The allocator\'s const void pointer type."},
{"lineNum":"  147","line":"       *"},
{"lineNum":"  148","line":"       * @c Alloc::const_void_pointer if that type exists, otherwise"},
{"lineNum":"  149","line":"       * <tt> pointer_traits<pointer>::rebind<const void> </tt>"},
{"lineNum":"  150","line":"      */"},
{"lineNum":"  151","line":"      using const_void_pointer = typename _Ptr<__cv_pointer, const void>::type;"},
{"lineNum":"  152","line":""},
{"lineNum":"  153","line":"      /**"},
{"lineNum":"  154","line":"       * @brief   The allocator\'s difference type"},
{"lineNum":"  155","line":"       *"},
{"lineNum":"  156","line":"       * @c Alloc::difference_type if that type exists, otherwise"},
{"lineNum":"  157","line":"       * <tt> pointer_traits<pointer>::difference_type </tt>"},
{"lineNum":"  158","line":"      */"},
{"lineNum":"  159","line":"      using difference_type = typename _Diff<_Alloc, pointer>::type;"},
{"lineNum":"  160","line":""},
{"lineNum":"  161","line":"      /**"},
{"lineNum":"  162","line":"       * @brief   The allocator\'s size type"},
{"lineNum":"  163","line":"       *"},
{"lineNum":"  164","line":"       * @c Alloc::size_type if that type exists, otherwise"},
{"lineNum":"  165","line":"       * <tt> make_unsigned<difference_type>::type </tt>"},
{"lineNum":"  166","line":"      */"},
{"lineNum":"  167","line":"      using size_type = typename _Size<_Alloc, difference_type>::type;"},
{"lineNum":"  168","line":""},
{"lineNum":"  169","line":"      /**"},
{"lineNum":"  170","line":"       * @brief   How the allocator is propagated on copy assignment"},
{"lineNum":"  171","line":"       *"},
{"lineNum":"  172","line":"       * @c Alloc::propagate_on_container_copy_assignment if that type exists,"},
{"lineNum":"  173","line":"       * otherwise @c false_type"},
{"lineNum":"  174","line":"      */"},
{"lineNum":"  175","line":"      using propagate_on_container_copy_assignment"},
{"lineNum":"  176","line":"\t= __detected_or_t<false_type, __pocca, _Alloc>;"},
{"lineNum":"  177","line":""},
{"lineNum":"  178","line":"      /**"},
{"lineNum":"  179","line":"       * @brief   How the allocator is propagated on move assignment"},
{"lineNum":"  180","line":"       *"},
{"lineNum":"  181","line":"       * @c Alloc::propagate_on_container_move_assignment if that type exists,"},
{"lineNum":"  182","line":"       * otherwise @c false_type"},
{"lineNum":"  183","line":"      */"},
{"lineNum":"  184","line":"      using propagate_on_container_move_assignment"},
{"lineNum":"  185","line":"\t= __detected_or_t<false_type, __pocma, _Alloc>;"},
{"lineNum":"  186","line":""},
{"lineNum":"  187","line":"      /**"},
{"lineNum":"  188","line":"       * @brief   How the allocator is propagated on swap"},
{"lineNum":"  189","line":"       *"},
{"lineNum":"  190","line":"       * @c Alloc::propagate_on_container_swap if that type exists,"},
{"lineNum":"  191","line":"       * otherwise @c false_type"},
{"lineNum":"  192","line":"      */"},
{"lineNum":"  193","line":"      using propagate_on_container_swap"},
{"lineNum":"  194","line":"\t= __detected_or_t<false_type, __pocs, _Alloc>;"},
{"lineNum":"  195","line":""},
{"lineNum":"  196","line":"      /**"},
{"lineNum":"  197","line":"       * @brief   Whether all instances of the allocator type compare equal."},
{"lineNum":"  198","line":"       *"},
{"lineNum":"  199","line":"       * @c Alloc::is_always_equal if that type exists,"},
{"lineNum":"  200","line":"       * otherwise @c is_empty<Alloc>::type"},
{"lineNum":"  201","line":"      */"},
{"lineNum":"  202","line":"      using is_always_equal"},
{"lineNum":"  203","line":"\t= __detected_or_t<typename is_empty<_Alloc>::type, __equal, _Alloc>;"},
{"lineNum":"  204","line":""},
{"lineNum":"  205","line":"      template<typename _Tp>"},
{"lineNum":"  206","line":"\tusing rebind_alloc = __alloc_rebind<_Alloc, _Tp>;"},
{"lineNum":"  207","line":"      template<typename _Tp>"},
{"lineNum":"  208","line":"\tusing rebind_traits = allocator_traits<rebind_alloc<_Tp>>;"},
{"lineNum":"  209","line":""},
{"lineNum":"  210","line":"    private:"},
{"lineNum":"  211","line":"      template<typename _Alloc2>"},
{"lineNum":"  212","line":"\tstatic auto"},
{"lineNum":"  213","line":"\t_S_allocate(_Alloc2& __a, size_type __n, const_void_pointer __hint, int)"},
{"lineNum":"  214","line":"\t-> decltype(__a.allocate(__n, __hint))"},
{"lineNum":"  215","line":"\t{ return __a.allocate(__n, __hint); }"},
{"lineNum":"  216","line":""},
{"lineNum":"  217","line":"      template<typename _Alloc2>"},
{"lineNum":"  218","line":"\tstatic pointer"},
{"lineNum":"  219","line":"\t_S_allocate(_Alloc2& __a, size_type __n, const_void_pointer, ...)"},
{"lineNum":"  220","line":"\t{ return __a.allocate(__n); }"},
{"lineNum":"  221","line":""},
{"lineNum":"  222","line":"      template<typename _Tp, typename... _Args>"},
{"lineNum":"  223","line":"\tstruct __construct_helper"},
{"lineNum":"  224","line":"\t{"},
{"lineNum":"  225","line":"\t  template<typename _Alloc2,"},
{"lineNum":"  226","line":"\t    typename = decltype(std::declval<_Alloc2*>()->construct("},
{"lineNum":"  227","line":"\t\t  std::declval<_Tp*>(), std::declval<_Args>()...))>"},
{"lineNum":"  228","line":"\t    static true_type __test(int);"},
{"lineNum":"  229","line":""},
{"lineNum":"  230","line":"\t  template<typename>"},
{"lineNum":"  231","line":"\t    static false_type __test(...);"},
{"lineNum":"  232","line":""},
{"lineNum":"  233","line":"\t  using type = decltype(__test<_Alloc>(0));"},
{"lineNum":"  234","line":"\t};"},
{"lineNum":"  235","line":""},
{"lineNum":"  236","line":"      template<typename _Tp, typename... _Args>"},
{"lineNum":"  237","line":"\tusing __has_construct"},
{"lineNum":"  238","line":"\t  = typename __construct_helper<_Tp, _Args...>::type;"},
{"lineNum":"  239","line":""},
{"lineNum":"  240","line":"      template<typename _Tp, typename... _Args>"},
{"lineNum":"  241","line":"\tstatic _Require<__has_construct<_Tp, _Args...>>"},
{"lineNum":"  242","line":"\t_S_construct(_Alloc& __a, _Tp* __p, _Args&&... __args)"},
{"lineNum":"  243","line":"\t{ __a.construct(__p, std::forward<_Args>(__args)...); }"},
{"lineNum":"  244","line":""},
{"lineNum":"  245","line":"      template<typename _Tp, typename... _Args>"},
{"lineNum":"  246","line":"\tstatic"},
{"lineNum":"  247","line":"\t_Require<__and_<__not_<__has_construct<_Tp, _Args...>>,"},
{"lineNum":"  248","line":"\t\t\t       is_constructible<_Tp, _Args...>>>"},
{"lineNum":"  249","line":"\t_S_construct(_Alloc&, _Tp* __p, _Args&&... __args)"},
{"lineNum":"  250","line":"\t{ ::new((void*)__p) _Tp(std::forward<_Args>(__args)...); }"},
{"lineNum":"  251","line":""},
{"lineNum":"  252","line":"      template<typename _Alloc2, typename _Tp>"},
{"lineNum":"  253","line":"\tstatic auto"},
{"lineNum":"  254","line":"\t_S_destroy(_Alloc2& __a, _Tp* __p, int)"},
{"lineNum":"  255","line":"\t-> decltype(__a.destroy(__p))"},
{"lineNum":"  256","line":"\t{ __a.destroy(__p); }"},
{"lineNum":"  257","line":""},
{"lineNum":"  258","line":"      template<typename _Alloc2, typename _Tp>"},
{"lineNum":"  259","line":"\tstatic void"},
{"lineNum":"  260","line":"\t_S_destroy(_Alloc2&, _Tp* __p, ...)"},
{"lineNum":"  261","line":"\t{ __p->~_Tp(); }"},
{"lineNum":"  262","line":""},
{"lineNum":"  263","line":"      template<typename _Alloc2>"},
{"lineNum":"  264","line":"\tstatic auto"},
{"lineNum":"  265","line":"\t_S_max_size(_Alloc2& __a, int)"},
{"lineNum":"  266","line":"\t-> decltype(__a.max_size())"},
{"lineNum":"  267","line":"\t{ return __a.max_size(); }"},
{"lineNum":"  268","line":""},
{"lineNum":"  269","line":"      template<typename _Alloc2>"},
{"lineNum":"  270","line":"\tstatic size_type"},
{"lineNum":"  271","line":"\t_S_max_size(_Alloc2&, ...)"},
{"lineNum":"  272","line":"\t{"},
{"lineNum":"  273","line":"\t  // _GLIBCXX_RESOLVE_LIB_DEFECTS"},
{"lineNum":"  274","line":"\t  // 2466. allocator_traits::max_size() default behavior is incorrect"},
{"lineNum":"  275","line":"\t  return __gnu_cxx::__numeric_traits<size_type>::__max"},
{"lineNum":"  276","line":"\t    / sizeof(value_type);"},
{"lineNum":"  277","line":"\t}"},
{"lineNum":"  278","line":""},
{"lineNum":"  279","line":"      template<typename _Alloc2>"},
{"lineNum":"  280","line":"\tstatic auto"},
{"lineNum":"  281","line":"\t_S_select(_Alloc2& __a, int)"},
{"lineNum":"  282","line":"\t-> decltype(__a.select_on_container_copy_construction())"},
{"lineNum":"  283","line":"\t{ return __a.select_on_container_copy_construction(); }"},
{"lineNum":"  284","line":""},
{"lineNum":"  285","line":"      template<typename _Alloc2>"},
{"lineNum":"  286","line":"\tstatic _Alloc2"},
{"lineNum":"  287","line":"\t_S_select(_Alloc2& __a, ...)"},
{"lineNum":"  288","line":"\t{ return __a; }"},
{"lineNum":"  289","line":""},
{"lineNum":"  290","line":"    public:"},
{"lineNum":"  291","line":""},
{"lineNum":"  292","line":"      /**"},
{"lineNum":"  293","line":"       *  @brief  Allocate memory."},
{"lineNum":"  294","line":"       *  @param  __a  An allocator."},
{"lineNum":"  295","line":"       *  @param  __n  The number of objects to allocate space for."},
{"lineNum":"  296","line":"       *"},
{"lineNum":"  297","line":"       *  Calls @c a.allocate(n)"},
{"lineNum":"  298","line":"      */"},
{"lineNum":"  299","line":"      static pointer"},
{"lineNum":"  300","line":"      allocate(_Alloc& __a, size_type __n)"},
{"lineNum":"  301","line":"      { return __a.allocate(__n); }"},
{"lineNum":"  302","line":""},
{"lineNum":"  303","line":"      /**"},
{"lineNum":"  304","line":"       *  @brief  Allocate memory."},
{"lineNum":"  305","line":"       *  @param  __a  An allocator."},
{"lineNum":"  306","line":"       *  @param  __n  The number of objects to allocate space for."},
{"lineNum":"  307","line":"       *  @param  __hint Aid to locality."},
{"lineNum":"  308","line":"       *  @return Memory of suitable size and alignment for @a n objects"},
{"lineNum":"  309","line":"       *          of type @c value_type"},
{"lineNum":"  310","line":"       *"},
{"lineNum":"  311","line":"       *  Returns <tt> a.allocate(n, hint) </tt> if that expression is"},
{"lineNum":"  312","line":"       *  well-formed, otherwise returns @c a.allocate(n)"},
{"lineNum":"  313","line":"      */"},
{"lineNum":"  314","line":"      static pointer"},
{"lineNum":"  315","line":"      allocate(_Alloc& __a, size_type __n, const_void_pointer __hint)"},
{"lineNum":"  316","line":"      { return _S_allocate(__a, __n, __hint, 0); }"},
{"lineNum":"  317","line":""},
{"lineNum":"  318","line":"      /**"},
{"lineNum":"  319","line":"       *  @brief  Deallocate memory."},
{"lineNum":"  320","line":"       *  @param  __a  An allocator."},
{"lineNum":"  321","line":"       *  @param  __p  Pointer to the memory to deallocate."},
{"lineNum":"  322","line":"       *  @param  __n  The number of objects space was allocated for."},
{"lineNum":"  323","line":"       *"},
{"lineNum":"  324","line":"       *  Calls <tt> a.deallocate(p, n) </tt>"},
{"lineNum":"  325","line":"      */"},
{"lineNum":"  326","line":"      static void"},
{"lineNum":"  327","line":"      deallocate(_Alloc& __a, pointer __p, size_type __n)"},
{"lineNum":"  328","line":"      { __a.deallocate(__p, __n); }"},
{"lineNum":"  329","line":""},
{"lineNum":"  330","line":"      /**"},
{"lineNum":"  331","line":"       *  @brief  Construct an object of type @a _Tp"},
{"lineNum":"  332","line":"       *  @param  __a  An allocator."},
{"lineNum":"  333","line":"       *  @param  __p  Pointer to memory of suitable size and alignment for Tp"},
{"lineNum":"  334","line":"       *  @param  __args Constructor arguments."},
{"lineNum":"  335","line":"       *"},
{"lineNum":"  336","line":"       *  Calls <tt> __a.construct(__p, std::forward<Args>(__args)...) </tt>"},
{"lineNum":"  337","line":"       *  if that expression is well-formed, otherwise uses placement-new"},
{"lineNum":"  338","line":"       *  to construct an object of type @a _Tp at location @a __p from the"},
{"lineNum":"  339","line":"       *  arguments @a __args..."},
{"lineNum":"  340","line":"      */"},
{"lineNum":"  341","line":"      template<typename _Tp, typename... _Args>"},
{"lineNum":"  342","line":"\tstatic auto construct(_Alloc& __a, _Tp* __p, _Args&&... __args)"},
{"lineNum":"  343","line":"\t-> decltype(_S_construct(__a, __p, std::forward<_Args>(__args)...))"},
{"lineNum":"  344","line":"\t{ _S_construct(__a, __p, std::forward<_Args>(__args)...); }"},
{"lineNum":"  345","line":""},
{"lineNum":"  346","line":"      /**"},
{"lineNum":"  347","line":"       *  @brief  Destroy an object of type @a _Tp"},
{"lineNum":"  348","line":"       *  @param  __a  An allocator."},
{"lineNum":"  349","line":"       *  @param  __p  Pointer to the object to destroy"},
{"lineNum":"  350","line":"       *"},
{"lineNum":"  351","line":"       *  Calls @c __a.destroy(__p) if that expression is well-formed,"},
{"lineNum":"  352","line":"       *  otherwise calls @c __p->~_Tp()"},
{"lineNum":"  353","line":"      */"},
{"lineNum":"  354","line":"      template<typename _Tp>"},
{"lineNum":"  355","line":"\tstatic void destroy(_Alloc& __a, _Tp* __p)"},
{"lineNum":"  356","line":"\t{ _S_destroy(__a, __p, 0); }"},
{"lineNum":"  357","line":""},
{"lineNum":"  358","line":"      /**"},
{"lineNum":"  359","line":"       *  @brief  The maximum supported allocation size"},
{"lineNum":"  360","line":"       *  @param  __a  An allocator."},
{"lineNum":"  361","line":"       *  @return @c __a.max_size() or @c numeric_limits<size_type>::max()"},
{"lineNum":"  362","line":"       *"},
{"lineNum":"  363","line":"       *  Returns @c __a.max_size() if that expression is well-formed,"},
{"lineNum":"  364","line":"       *  otherwise returns @c numeric_limits<size_type>::max()"},
{"lineNum":"  365","line":"      */"},
{"lineNum":"  366","line":"      static size_type max_size(const _Alloc& __a) noexcept"},
{"lineNum":"  367","line":"      { return _S_max_size(__a, 0); }"},
{"lineNum":"  368","line":""},
{"lineNum":"  369","line":"      /**"},
{"lineNum":"  370","line":"       *  @brief  Obtain an allocator to use when copying a container."},
{"lineNum":"  371","line":"       *  @param  __rhs  An allocator."},
{"lineNum":"  372","line":"       *  @return @c __rhs.select_on_container_copy_construction() or @a __rhs"},
{"lineNum":"  373","line":"       *"},
{"lineNum":"  374","line":"       *  Returns @c __rhs.select_on_container_copy_construction() if that"},
{"lineNum":"  375","line":"       *  expression is well-formed, otherwise returns @a __rhs"},
{"lineNum":"  376","line":"      */"},
{"lineNum":"  377","line":"      static _Alloc"},
{"lineNum":"  378","line":"      select_on_container_copy_construction(const _Alloc& __rhs)"},
{"lineNum":"  379","line":"      { return _S_select(__rhs, 0); }"},
{"lineNum":"  380","line":"    };"},
{"lineNum":"  381","line":""},
{"lineNum":"  382","line":"  /// Partial specialization for std::allocator."},
{"lineNum":"  383","line":"  template<typename _Tp>"},
{"lineNum":"  384","line":"    struct allocator_traits<allocator<_Tp>>"},
{"lineNum":"  385","line":"    {"},
{"lineNum":"  386","line":"      /// The allocator type"},
{"lineNum":"  387","line":"      using allocator_type = allocator<_Tp>;"},
{"lineNum":"  388","line":"      /// The allocated type"},
{"lineNum":"  389","line":"      using value_type = _Tp;"},
{"lineNum":"  390","line":""},
{"lineNum":"  391","line":"      /// The allocator\'s pointer type."},
{"lineNum":"  392","line":"      using pointer = _Tp*;"},
{"lineNum":"  393","line":""},
{"lineNum":"  394","line":"      /// The allocator\'s const pointer type."},
{"lineNum":"  395","line":"      using const_pointer = const _Tp*;"},
{"lineNum":"  396","line":""},
{"lineNum":"  397","line":"      /// The allocator\'s void pointer type."},
{"lineNum":"  398","line":"      using void_pointer = void*;"},
{"lineNum":"  399","line":""},
{"lineNum":"  400","line":"      /// The allocator\'s const void pointer type."},
{"lineNum":"  401","line":"      using const_void_pointer = const void*;"},
{"lineNum":"  402","line":""},
{"lineNum":"  403","line":"      /// The allocator\'s difference type"},
{"lineNum":"  404","line":"      using difference_type = std::ptrdiff_t;"},
{"lineNum":"  405","line":""},
{"lineNum":"  406","line":"      /// The allocator\'s size type"},
{"lineNum":"  407","line":"      using size_type = std::size_t;"},
{"lineNum":"  408","line":""},
{"lineNum":"  409","line":"      /// How the allocator is propagated on copy assignment"},
{"lineNum":"  410","line":"      using propagate_on_container_copy_assignment = false_type;"},
{"lineNum":"  411","line":""},
{"lineNum":"  412","line":"      /// How the allocator is propagated on move assignment"},
{"lineNum":"  413","line":"      using propagate_on_container_move_assignment = true_type;"},
{"lineNum":"  414","line":""},
{"lineNum":"  415","line":"      /// How the allocator is propagated on swap"},
{"lineNum":"  416","line":"      using propagate_on_container_swap = false_type;"},
{"lineNum":"  417","line":""},
{"lineNum":"  418","line":"      /// Whether all instances of the allocator type compare equal."},
{"lineNum":"  419","line":"      using is_always_equal = true_type;"},
{"lineNum":"  420","line":""},
{"lineNum":"  421","line":"      template<typename _Up>"},
{"lineNum":"  422","line":"\tusing rebind_alloc = allocator<_Up>;"},
{"lineNum":"  423","line":""},
{"lineNum":"  424","line":"      template<typename _Up>"},
{"lineNum":"  425","line":"\tusing rebind_traits = allocator_traits<allocator<_Up>>;"},
{"lineNum":"  426","line":""},
{"lineNum":"  427","line":"      /**"},
{"lineNum":"  428","line":"       *  @brief  Allocate memory."},
{"lineNum":"  429","line":"       *  @param  __a  An allocator."},
{"lineNum":"  430","line":"       *  @param  __n  The number of objects to allocate space for."},
{"lineNum":"  431","line":"       *"},
{"lineNum":"  432","line":"       *  Calls @c a.allocate(n)"},
{"lineNum":"  433","line":"      */"},
{"lineNum":"  434","line":"      static pointer"},
{"lineNum":"  435","line":"      allocate(allocator_type& __a, size_type __n)","class":"linePartCov","hits":"3","order":"201","possible_hits":"4",},
{"lineNum":"  436","line":"      { return __a.allocate(__n); }","class":"linePartCov","hits":"3","order":"202","possible_hits":"8",},
{"lineNum":"  437","line":""},
{"lineNum":"  438","line":"      /**"},
{"lineNum":"  439","line":"       *  @brief  Allocate memory."},
{"lineNum":"  440","line":"       *  @param  __a  An allocator."},
{"lineNum":"  441","line":"       *  @param  __n  The number of objects to allocate space for."},
{"lineNum":"  442","line":"       *  @param  __hint Aid to locality."},
{"lineNum":"  443","line":"       *  @return Memory of suitable size and alignment for @a n objects"},
{"lineNum":"  444","line":"       *          of type @c value_type"},
{"lineNum":"  445","line":"       *"},
{"lineNum":"  446","line":"       *  Returns <tt> a.allocate(n, hint) </tt>"},
{"lineNum":"  447","line":"      */"},
{"lineNum":"  448","line":"      static pointer"},
{"lineNum":"  449","line":"      allocate(allocator_type& __a, size_type __n, const_void_pointer __hint)"},
{"lineNum":"  450","line":"      { return __a.allocate(__n, __hint); }"},
{"lineNum":"  451","line":""},
{"lineNum":"  452","line":"      /**"},
{"lineNum":"  453","line":"       *  @brief  Deallocate memory."},
{"lineNum":"  454","line":"       *  @param  __a  An allocator."},
{"lineNum":"  455","line":"       *  @param  __p  Pointer to the memory to deallocate."},
{"lineNum":"  456","line":"       *  @param  __n  The number of objects space was allocated for."},
{"lineNum":"  457","line":"       *"},
{"lineNum":"  458","line":"       *  Calls <tt> a.deallocate(p, n) </tt>"},
{"lineNum":"  459","line":"      */"},
{"lineNum":"  460","line":"      static void"},
{"lineNum":"  461","line":"      deallocate(allocator_type& __a, pointer __p, size_type __n)","class":"linePartCov","hits":"3","order":"1221","possible_hits":"4",},
{"lineNum":"  462","line":"      { __a.deallocate(__p, __n); }","class":"linePartCov","hits":"3","order":"1222","possible_hits":"8",},
{"lineNum":"  463","line":""},
{"lineNum":"  464","line":"      /**"},
{"lineNum":"  465","line":"       *  @brief  Construct an object of type @a _Up"},
{"lineNum":"  466","line":"       *  @param  __a  An allocator."},
{"lineNum":"  467","line":"       *  @param  __p  Pointer to memory of suitable size and alignment for Tp"},
{"lineNum":"  468","line":"       *  @param  __args Constructor arguments."},
{"lineNum":"  469","line":"       *"},
{"lineNum":"  470","line":"       *  Calls <tt> __a.construct(__p, std::forward<Args>(__args)...) </tt>"},
{"lineNum":"  471","line":"      */"},
{"lineNum":"  472","line":"      template<typename _Up, typename... _Args>"},
{"lineNum":"  473","line":"\tstatic void"},
{"lineNum":"  474","line":"\tconstruct(allocator_type& __a, _Up* __p, _Args&&... __args)","class":"linePartCov","hits":"4","order":"762","possible_hits":"5",},
{"lineNum":"  475","line":"\t{ __a.construct(__p, std::forward<_Args>(__args)...); }","class":"linePartCov","hits":"4","order":"763","possible_hits":"10",},
{"lineNum":"  476","line":""},
{"lineNum":"  477","line":"      /**"},
{"lineNum":"  478","line":"       *  @brief  Destroy an object of type @a _Up"},
{"lineNum":"  479","line":"       *  @param  __a  An allocator."},
{"lineNum":"  480","line":"       *  @param  __p  Pointer to the object to destroy"},
{"lineNum":"  481","line":"       *"},
{"lineNum":"  482","line":"       *  Calls @c __a.destroy(__p)."},
{"lineNum":"  483","line":"      */"},
{"lineNum":"  484","line":"      template<typename _Up>"},
{"lineNum":"  485","line":"\tstatic void"},
{"lineNum":"  486","line":"\tdestroy(allocator_type& __a, _Up* __p)","class":"linePartCov","hits":"2","order":"1099","possible_hits":"3",},
{"lineNum":"  487","line":"\t{ __a.destroy(__p); }","class":"linePartCov","hits":"2","order":"1100","possible_hits":"6",},
{"lineNum":"  488","line":""},
{"lineNum":"  489","line":"      /**"},
{"lineNum":"  490","line":"       *  @brief  The maximum supported allocation size"},
{"lineNum":"  491","line":"       *  @param  __a  An allocator."},
{"lineNum":"  492","line":"       *  @return @c __a.max_size()"},
{"lineNum":"  493","line":"      */"},
{"lineNum":"  494","line":"      static size_type"},
{"lineNum":"  495","line":"      max_size(const allocator_type& __a) noexcept"},
{"lineNum":"  496","line":"      { return __a.max_size(); }"},
{"lineNum":"  497","line":""},
{"lineNum":"  498","line":"      /**"},
{"lineNum":"  499","line":"       *  @brief  Obtain an allocator to use when copying a container."},
{"lineNum":"  500","line":"       *  @param  __rhs  An allocator."},
{"lineNum":"  501","line":"       *  @return @c __rhs"},
{"lineNum":"  502","line":"      */"},
{"lineNum":"  503","line":"      static allocator_type"},
{"lineNum":"  504","line":"      select_on_container_copy_construction(const allocator_type& __rhs)","class":"lineCov","hits":"1","order":"1082","possible_hits":"1",},
{"lineNum":"  505","line":"      { return __rhs; }","class":"linePartCov","hits":"1","order":"1083","possible_hits":"2",},
{"lineNum":"  506","line":"    };"},
{"lineNum":"  507","line":""},
{"lineNum":"  508","line":""},
{"lineNum":"  509","line":"  template<typename _Alloc>"},
{"lineNum":"  510","line":"    inline void"},
{"lineNum":"  511","line":"    __do_alloc_on_copy(_Alloc& __one, const _Alloc& __two, true_type)"},
{"lineNum":"  512","line":"    { __one = __two; }"},
{"lineNum":"  513","line":""},
{"lineNum":"  514","line":"  template<typename _Alloc>"},
{"lineNum":"  515","line":"    inline void"},
{"lineNum":"  516","line":"    __do_alloc_on_copy(_Alloc&, const _Alloc&, false_type)"},
{"lineNum":"  517","line":"    { }"},
{"lineNum":"  518","line":""},
{"lineNum":"  519","line":"  template<typename _Alloc>"},
{"lineNum":"  520","line":"    inline void __alloc_on_copy(_Alloc& __one, const _Alloc& __two)"},
{"lineNum":"  521","line":"    {"},
{"lineNum":"  522","line":"      typedef allocator_traits<_Alloc> __traits;"},
{"lineNum":"  523","line":"      typedef typename __traits::propagate_on_container_copy_assignment __pocca;"},
{"lineNum":"  524","line":"      __do_alloc_on_copy(__one, __two, __pocca());"},
{"lineNum":"  525","line":"    }"},
{"lineNum":"  526","line":""},
{"lineNum":"  527","line":"  template<typename _Alloc>"},
{"lineNum":"  528","line":"    inline _Alloc __alloc_on_copy(const _Alloc& __a)"},
{"lineNum":"  529","line":"    {"},
{"lineNum":"  530","line":"      typedef allocator_traits<_Alloc> __traits;"},
{"lineNum":"  531","line":"      return __traits::select_on_container_copy_construction(__a);"},
{"lineNum":"  532","line":"    }"},
{"lineNum":"  533","line":""},
{"lineNum":"  534","line":"  template<typename _Alloc>"},
{"lineNum":"  535","line":"    inline void __do_alloc_on_move(_Alloc& __one, _Alloc& __two, true_type)"},
{"lineNum":"  536","line":"    { __one = std::move(__two); }"},
{"lineNum":"  537","line":""},
{"lineNum":"  538","line":"  template<typename _Alloc>"},
{"lineNum":"  539","line":"    inline void __do_alloc_on_move(_Alloc&, _Alloc&, false_type)"},
{"lineNum":"  540","line":"    { }"},
{"lineNum":"  541","line":""},
{"lineNum":"  542","line":"  template<typename _Alloc>"},
{"lineNum":"  543","line":"    inline void __alloc_on_move(_Alloc& __one, _Alloc& __two)"},
{"lineNum":"  544","line":"    {"},
{"lineNum":"  545","line":"      typedef allocator_traits<_Alloc> __traits;"},
{"lineNum":"  546","line":"      typedef typename __traits::propagate_on_container_move_assignment __pocma;"},
{"lineNum":"  547","line":"      __do_alloc_on_move(__one, __two, __pocma());"},
{"lineNum":"  548","line":"    }"},
{"lineNum":"  549","line":""},
{"lineNum":"  550","line":"  template<typename _Alloc>"},
{"lineNum":"  551","line":"    inline void __do_alloc_on_swap(_Alloc& __one, _Alloc& __two, true_type)"},
{"lineNum":"  552","line":"    {"},
{"lineNum":"  553","line":"      using std::swap;"},
{"lineNum":"  554","line":"      swap(__one, __two);"},
{"lineNum":"  555","line":"    }"},
{"lineNum":"  556","line":""},
{"lineNum":"  557","line":"  template<typename _Alloc>"},
{"lineNum":"  558","line":"    inline void __do_alloc_on_swap(_Alloc&, _Alloc&, false_type)"},
{"lineNum":"  559","line":"    { }"},
{"lineNum":"  560","line":""},
{"lineNum":"  561","line":"  template<typename _Alloc>"},
{"lineNum":"  562","line":"    inline void __alloc_on_swap(_Alloc& __one, _Alloc& __two)"},
{"lineNum":"  563","line":"    {"},
{"lineNum":"  564","line":"      typedef allocator_traits<_Alloc> __traits;"},
{"lineNum":"  565","line":"      typedef typename __traits::propagate_on_container_swap __pocs;"},
{"lineNum":"  566","line":"      __do_alloc_on_swap(__one, __two, __pocs());"},
{"lineNum":"  567","line":"    }"},
{"lineNum":"  568","line":""},
{"lineNum":"  569","line":"  template<typename _Alloc>"},
{"lineNum":"  570","line":"    class __is_copy_insertable_impl"},
{"lineNum":"  571","line":"    {"},
{"lineNum":"  572","line":"      typedef allocator_traits<_Alloc> _Traits;"},
{"lineNum":"  573","line":""},
{"lineNum":"  574","line":"      template<typename _Up, typename"},
{"lineNum":"  575","line":"\t       = decltype(_Traits::construct(std::declval<_Alloc&>(),"},
{"lineNum":"  576","line":"\t\t\t\t\t     std::declval<_Up*>(),"},
{"lineNum":"  577","line":"\t\t\t\t\t     std::declval<const _Up&>()))>"},
{"lineNum":"  578","line":"\tstatic true_type"},
{"lineNum":"  579","line":"\t_M_select(int);"},
{"lineNum":"  580","line":""},
{"lineNum":"  581","line":"      template<typename _Up>"},
{"lineNum":"  582","line":"\tstatic false_type"},
{"lineNum":"  583","line":"\t_M_select(...);"},
{"lineNum":"  584","line":""},
{"lineNum":"  585","line":"    public:"},
{"lineNum":"  586","line":"      typedef decltype(_M_select<typename _Alloc::value_type>(0)) type;"},
{"lineNum":"  587","line":"    };"},
{"lineNum":"  588","line":""},
{"lineNum":"  589","line":"  // true if _Alloc::value_type is CopyInsertable into containers using _Alloc"},
{"lineNum":"  590","line":"  template<typename _Alloc>"},
{"lineNum":"  591","line":"    struct __is_copy_insertable"},
{"lineNum":"  592","line":"    : __is_copy_insertable_impl<_Alloc>::type"},
{"lineNum":"  593","line":"    { };"},
{"lineNum":"  594","line":""},
{"lineNum":"  595","line":"  // std::allocator<_Tp> just requires CopyConstructible"},
{"lineNum":"  596","line":"  template<typename _Tp>"},
{"lineNum":"  597","line":"    struct __is_copy_insertable<allocator<_Tp>>"},
{"lineNum":"  598","line":"    : is_copy_constructible<_Tp>"},
{"lineNum":"  599","line":"    { };"},
{"lineNum":"  600","line":""},
{"lineNum":"  601","line":"_GLIBCXX_END_NAMESPACE_VERSION"},
{"lineNum":"  602","line":"} // namespace std"},
{"lineNum":"  603","line":""},
{"lineNum":"  604","line":"#endif"},
{"lineNum":"  605","line":"#endif"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "mipl_parser", "date" : "2018-11-28 14:11:03", "instrumented" : 10, "covered" : 10,};
var merged_data = [];
