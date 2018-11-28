var data = {lines:[
{"lineNum":"    1","line":"// Pair implementation -*- C++ -*-"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"// Copyright (C) 2001-2017 Free Software Foundation, Inc."},
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
{"lineNum":"   25","line":"/*"},
{"lineNum":"   26","line":" *"},
{"lineNum":"   27","line":" * Copyright (c) 1994"},
{"lineNum":"   28","line":" * Hewlett-Packard Company"},
{"lineNum":"   29","line":" *"},
{"lineNum":"   30","line":" * Permission to use, copy, modify, distribute and sell this software"},
{"lineNum":"   31","line":" * and its documentation for any purpose is hereby granted without fee,"},
{"lineNum":"   32","line":" * provided that the above copyright notice appear in all copies and"},
{"lineNum":"   33","line":" * that both that copyright notice and this permission notice appear"},
{"lineNum":"   34","line":" * in supporting documentation.  Hewlett-Packard Company makes no"},
{"lineNum":"   35","line":" * representations about the suitability of this software for any"},
{"lineNum":"   36","line":" * purpose.  It is provided \"as is\" without express or implied warranty."},
{"lineNum":"   37","line":" *"},
{"lineNum":"   38","line":" *"},
{"lineNum":"   39","line":" * Copyright (c) 1996,1997"},
{"lineNum":"   40","line":" * Silicon Graphics Computer Systems, Inc."},
{"lineNum":"   41","line":" *"},
{"lineNum":"   42","line":" * Permission to use, copy, modify, distribute and sell this software"},
{"lineNum":"   43","line":" * and its documentation for any purpose is hereby granted without fee,"},
{"lineNum":"   44","line":" * provided that the above copyright notice appear in all copies and"},
{"lineNum":"   45","line":" * that both that copyright notice and this permission notice appear"},
{"lineNum":"   46","line":" * in supporting documentation.  Silicon Graphics makes no"},
{"lineNum":"   47","line":" * representations about the suitability of this software for any"},
{"lineNum":"   48","line":" * purpose.  It is provided \"as is\" without express or implied warranty."},
{"lineNum":"   49","line":" */"},
{"lineNum":"   50","line":""},
{"lineNum":"   51","line":"/** @file bits/stl_pair.h"},
{"lineNum":"   52","line":" *  This is an internal header file, included by other library headers."},
{"lineNum":"   53","line":" *  Do not attempt to use it directly. @headername{utility}"},
{"lineNum":"   54","line":" */"},
{"lineNum":"   55","line":""},
{"lineNum":"   56","line":"#ifndef _STL_PAIR_H"},
{"lineNum":"   57","line":"#define _STL_PAIR_H 1"},
{"lineNum":"   58","line":""},
{"lineNum":"   59","line":"#include <bits/move.h> // for std::move / std::forward, and std::swap"},
{"lineNum":"   60","line":""},
{"lineNum":"   61","line":"#if __cplusplus >= 201103L"},
{"lineNum":"   62","line":"#include <type_traits> // for std::__decay_and_strip too"},
{"lineNum":"   63","line":"#endif"},
{"lineNum":"   64","line":""},
{"lineNum":"   65","line":"namespace std _GLIBCXX_VISIBILITY(default)"},
{"lineNum":"   66","line":"{"},
{"lineNum":"   67","line":"_GLIBCXX_BEGIN_NAMESPACE_VERSION"},
{"lineNum":"   68","line":""},
{"lineNum":"   69","line":"  /**"},
{"lineNum":"   70","line":"   *  @addtogroup utilities"},
{"lineNum":"   71","line":"   *  @{"},
{"lineNum":"   72","line":"   */"},
{"lineNum":"   73","line":""},
{"lineNum":"   74","line":"#if __cplusplus >= 201103L"},
{"lineNum":"   75","line":"  /// piecewise_construct_t"},
{"lineNum":"   76","line":"  struct piecewise_construct_t { explicit piecewise_construct_t() = default; };"},
{"lineNum":"   77","line":""},
{"lineNum":"   78","line":"  /// piecewise_construct"},
{"lineNum":"   79","line":"  _GLIBCXX17_INLINE constexpr piecewise_construct_t piecewise_construct ="},
{"lineNum":"   80","line":"    piecewise_construct_t();"},
{"lineNum":"   81","line":""},
{"lineNum":"   82","line":"  // Forward declarations."},
{"lineNum":"   83","line":"  template<typename...>"},
{"lineNum":"   84","line":"    class tuple;"},
{"lineNum":"   85","line":""},
{"lineNum":"   86","line":"  template<std::size_t...>"},
{"lineNum":"   87","line":"    struct _Index_tuple;"},
{"lineNum":"   88","line":""},
{"lineNum":"   89","line":"  // Concept utility functions, reused in conditionally-explicit"},
{"lineNum":"   90","line":"  // constructors."},
{"lineNum":"   91","line":"  // See PR 70437, don\'t look at is_constructible or"},
{"lineNum":"   92","line":"  // is_convertible if the types are the same to"},
{"lineNum":"   93","line":"  // avoid querying those properties for incomplete types."},
{"lineNum":"   94","line":"  template <bool, typename _T1, typename _T2>"},
{"lineNum":"   95","line":"    struct _PCC"},
{"lineNum":"   96","line":"    {"},
{"lineNum":"   97","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"   98","line":"      static constexpr bool _ConstructiblePair()"},
{"lineNum":"   99","line":"      {"},
{"lineNum":"  100","line":"\treturn __and_<is_constructible<_T1, const _U1&>,"},
{"lineNum":"  101","line":"\t\t      is_constructible<_T2, const _U2&>>::value;"},
{"lineNum":"  102","line":"      }"},
{"lineNum":"  103","line":""},
{"lineNum":"  104","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"  105","line":"      static constexpr bool _ImplicitlyConvertiblePair()"},
{"lineNum":"  106","line":"      {"},
{"lineNum":"  107","line":"\treturn __and_<is_convertible<const _U1&, _T1>,"},
{"lineNum":"  108","line":"\t\t      is_convertible<const _U2&, _T2>>::value;"},
{"lineNum":"  109","line":"      }"},
{"lineNum":"  110","line":""},
{"lineNum":"  111","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"  112","line":"      static constexpr bool _MoveConstructiblePair()"},
{"lineNum":"  113","line":"      {"},
{"lineNum":"  114","line":"\treturn __and_<is_constructible<_T1, _U1&&>,"},
{"lineNum":"  115","line":"\t\t      is_constructible<_T2, _U2&&>>::value;"},
{"lineNum":"  116","line":"      }"},
{"lineNum":"  117","line":""},
{"lineNum":"  118","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"  119","line":"      static constexpr bool _ImplicitlyMoveConvertiblePair()"},
{"lineNum":"  120","line":"      {"},
{"lineNum":"  121","line":"\treturn __and_<is_convertible<_U1&&, _T1>,"},
{"lineNum":"  122","line":"\t\t      is_convertible<_U2&&, _T2>>::value;"},
{"lineNum":"  123","line":"      }"},
{"lineNum":"  124","line":""},
{"lineNum":"  125","line":"      template <bool __implicit, typename _U1, typename _U2>"},
{"lineNum":"  126","line":"      static constexpr bool _CopyMovePair()"},
{"lineNum":"  127","line":"      {"},
{"lineNum":"  128","line":"\tusing __do_converts = __and_<is_convertible<const _U1&, _T1>,"},
{"lineNum":"  129","line":"\t\t\t\t  is_convertible<_U2&&, _T2>>;"},
{"lineNum":"  130","line":"\tusing __converts = typename conditional<__implicit,"},
{"lineNum":"  131","line":"\t\t\t\t       __do_converts,"},
{"lineNum":"  132","line":"\t\t\t\t       __not_<__do_converts>>::type;"},
{"lineNum":"  133","line":"\treturn __and_<is_constructible<_T1, const _U1&>,"},
{"lineNum":"  134","line":"\t\t      is_constructible<_T2, _U2&&>,"},
{"lineNum":"  135","line":"\t\t      __converts"},
{"lineNum":"  136","line":"\t\t      >::value;"},
{"lineNum":"  137","line":"      }"},
{"lineNum":"  138","line":""},
{"lineNum":"  139","line":"      template <bool __implicit, typename _U1, typename _U2>"},
{"lineNum":"  140","line":"      static constexpr bool _MoveCopyPair()"},
{"lineNum":"  141","line":"      {"},
{"lineNum":"  142","line":"\tusing __do_converts = __and_<is_convertible<_U1&&, _T1>,"},
{"lineNum":"  143","line":"\t\t\t\t  is_convertible<const _U2&, _T2>>;"},
{"lineNum":"  144","line":"\tusing __converts = typename conditional<__implicit,"},
{"lineNum":"  145","line":"\t\t\t\t       __do_converts,"},
{"lineNum":"  146","line":"\t\t\t\t       __not_<__do_converts>>::type;"},
{"lineNum":"  147","line":"\treturn __and_<is_constructible<_T1, _U1&&>,"},
{"lineNum":"  148","line":"\t\t      is_constructible<_T2, const _U2&&>,"},
{"lineNum":"  149","line":"\t\t      __converts"},
{"lineNum":"  150","line":"\t\t      >::value;"},
{"lineNum":"  151","line":"      }"},
{"lineNum":"  152","line":"  };"},
{"lineNum":"  153","line":""},
{"lineNum":"  154","line":"  template <typename _T1, typename _T2>"},
{"lineNum":"  155","line":"    struct _PCC<false, _T1, _T2>"},
{"lineNum":"  156","line":"    {"},
{"lineNum":"  157","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"  158","line":"      static constexpr bool _ConstructiblePair()"},
{"lineNum":"  159","line":"      {"},
{"lineNum":"  160","line":"\treturn false;"},
{"lineNum":"  161","line":"      }"},
{"lineNum":"  162","line":""},
{"lineNum":"  163","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"  164","line":"      static constexpr bool _ImplicitlyConvertiblePair()"},
{"lineNum":"  165","line":"      {"},
{"lineNum":"  166","line":"\treturn false;"},
{"lineNum":"  167","line":"      }"},
{"lineNum":"  168","line":""},
{"lineNum":"  169","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"  170","line":"      static constexpr bool _MoveConstructiblePair()"},
{"lineNum":"  171","line":"      {"},
{"lineNum":"  172","line":"\treturn false;"},
{"lineNum":"  173","line":"      }"},
{"lineNum":"  174","line":""},
{"lineNum":"  175","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"  176","line":"      static constexpr bool _ImplicitlyMoveConvertiblePair()"},
{"lineNum":"  177","line":"      {"},
{"lineNum":"  178","line":"\treturn false;"},
{"lineNum":"  179","line":"      }"},
{"lineNum":"  180","line":"  };"},
{"lineNum":"  181","line":""},
{"lineNum":"  182","line":"  // PR libstdc++/79141, a utility type for preventing"},
{"lineNum":"  183","line":"  // initialization of an argument of a disabled assignment"},
{"lineNum":"  184","line":"  // operator from a pair of empty braces."},
{"lineNum":"  185","line":"  struct __nonesuch_no_braces : std::__nonesuch {"},
{"lineNum":"  186","line":"    explicit __nonesuch_no_braces(const __nonesuch&) = delete;"},
{"lineNum":"  187","line":"  };"},
{"lineNum":"  188","line":""},
{"lineNum":"  189","line":"#endif"},
{"lineNum":"  190","line":""},
{"lineNum":"  191","line":" /**"},
{"lineNum":"  192","line":"   *  @brief Struct holding two objects of arbitrary type."},
{"lineNum":"  193","line":"   *"},
{"lineNum":"  194","line":"   *  @tparam _T1  Type of first object."},
{"lineNum":"  195","line":"   *  @tparam _T2  Type of second object."},
{"lineNum":"  196","line":"   */"},
{"lineNum":"  197","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  198","line":"    struct pair","class":"linePartCov","hits":"4","order":"956","possible_hits":"6",},
{"lineNum":"  199","line":"    {"},
{"lineNum":"  200","line":"      typedef _T1 first_type;    /// @c first_type is the first bound type"},
{"lineNum":"  201","line":"      typedef _T2 second_type;   /// @c second_type is the second bound type"},
{"lineNum":"  202","line":""},
{"lineNum":"  203","line":"      _T1 first;                 /// @c first is a copy of the first object"},
{"lineNum":"  204","line":"      _T2 second;                /// @c second is a copy of the second object"},
{"lineNum":"  205","line":""},
{"lineNum":"  206","line":"      // _GLIBCXX_RESOLVE_LIB_DEFECTS"},
{"lineNum":"  207","line":"      // 265.  std::pair::pair() effects overly restrictive"},
{"lineNum":"  208","line":"      /** The default constructor creates @c first and @c second using their"},
{"lineNum":"  209","line":"       *  respective default constructors.  */"},
{"lineNum":"  210","line":"#if __cplusplus >= 201103L"},
{"lineNum":"  211","line":"      template <typename _U1 = _T1,"},
{"lineNum":"  212","line":"                typename _U2 = _T2,"},
{"lineNum":"  213","line":"                typename enable_if<__and_<"},
{"lineNum":"  214","line":"                                     __is_implicitly_default_constructible<_U1>,"},
{"lineNum":"  215","line":"                                     __is_implicitly_default_constructible<_U2>>"},
{"lineNum":"  216","line":"                                   ::value, bool>::type = true>"},
{"lineNum":"  217","line":"#endif"},
{"lineNum":"  218","line":"      _GLIBCXX_CONSTEXPR pair()"},
{"lineNum":"  219","line":"      : first(), second() { }"},
{"lineNum":"  220","line":""},
{"lineNum":"  221","line":"#if __cplusplus >= 201103L"},
{"lineNum":"  222","line":"      template <typename _U1 = _T1,"},
{"lineNum":"  223","line":"                typename _U2 = _T2,"},
{"lineNum":"  224","line":"                typename enable_if<__and_<"},
{"lineNum":"  225","line":"                       is_default_constructible<_U1>,"},
{"lineNum":"  226","line":"                       is_default_constructible<_U2>,"},
{"lineNum":"  227","line":"                       __not_<"},
{"lineNum":"  228","line":"                         __and_<__is_implicitly_default_constructible<_U1>,"},
{"lineNum":"  229","line":"                                __is_implicitly_default_constructible<_U2>>>>"},
{"lineNum":"  230","line":"                                   ::value, bool>::type = false>"},
{"lineNum":"  231","line":"      explicit constexpr pair()"},
{"lineNum":"  232","line":"      : first(), second() { }"},
{"lineNum":"  233","line":"#endif"},
{"lineNum":"  234","line":""},
{"lineNum":"  235","line":"      /** Two objects may be passed to a @c pair constructor to be copied.  */"},
{"lineNum":"  236","line":"#if __cplusplus < 201103L"},
{"lineNum":"  237","line":"      pair(const _T1& __a, const _T2& __b)"},
{"lineNum":"  238","line":"      : first(__a), second(__b) { }"},
{"lineNum":"  239","line":"#else"},
{"lineNum":"  240","line":"      // Shortcut for constraining the templates that don\'t take pairs."},
{"lineNum":"  241","line":"      using _PCCP = _PCC<true, _T1, _T2>;"},
{"lineNum":"  242","line":""},
{"lineNum":"  243","line":"      template<typename _U1 = _T1, typename _U2=_T2, typename"},
{"lineNum":"  244","line":"\t       enable_if<_PCCP::template"},
{"lineNum":"  245","line":"\t\t\t   _ConstructiblePair<_U1, _U2>()"},
{"lineNum":"  246","line":"\t                 && _PCCP::template"},
{"lineNum":"  247","line":"\t\t\t   _ImplicitlyConvertiblePair<_U1, _U2>(),"},
{"lineNum":"  248","line":"                         bool>::type=true>"},
{"lineNum":"  249","line":"      constexpr pair(const _T1& __a, const _T2& __b)"},
{"lineNum":"  250","line":"      : first(__a), second(__b) { }"},
{"lineNum":"  251","line":""},
{"lineNum":"  252","line":"       template<typename _U1 = _T1, typename _U2=_T2, typename"},
{"lineNum":"  253","line":"\t\tenable_if<_PCCP::template"},
{"lineNum":"  254","line":"\t\t\t    _ConstructiblePair<_U1, _U2>()"},
{"lineNum":"  255","line":"\t                  && !_PCCP::template"},
{"lineNum":"  256","line":"\t\t\t    _ImplicitlyConvertiblePair<_U1, _U2>(),"},
{"lineNum":"  257","line":"                         bool>::type=false>"},
{"lineNum":"  258","line":"      explicit constexpr pair(const _T1& __a, const _T2& __b)"},
{"lineNum":"  259","line":"      : first(__a), second(__b) { }"},
{"lineNum":"  260","line":"#endif"},
{"lineNum":"  261","line":""},
{"lineNum":"  262","line":"      /** There is also a templated copy ctor for the @c pair class itself.  */"},
{"lineNum":"  263","line":"#if __cplusplus < 201103L"},
{"lineNum":"  264","line":"      template<typename _U1, typename _U2>"},
{"lineNum":"  265","line":"\tpair(const pair<_U1, _U2>& __p)"},
{"lineNum":"  266","line":"\t: first(__p.first), second(__p.second) { }"},
{"lineNum":"  267","line":"#else"},
{"lineNum":"  268","line":"      // Shortcut for constraining the templates that take pairs."},
{"lineNum":"  269","line":"      template <typename _U1, typename _U2>"},
{"lineNum":"  270","line":"        using _PCCFP = _PCC<!is_same<_T1, _U1>::value"},
{"lineNum":"  271","line":"\t\t\t    || !is_same<_T2, _U2>::value,"},
{"lineNum":"  272","line":"\t\t\t    _T1, _T2>;"},
{"lineNum":"  273","line":""},
{"lineNum":"  274","line":"      template<typename _U1, typename _U2, typename"},
{"lineNum":"  275","line":"\t       enable_if<_PCCFP<_U1, _U2>::template"},
{"lineNum":"  276","line":"\t\t\t   _ConstructiblePair<_U1, _U2>()"},
{"lineNum":"  277","line":"\t                 && _PCCFP<_U1, _U2>::template"},
{"lineNum":"  278","line":"\t\t\t   _ImplicitlyConvertiblePair<_U1, _U2>(),"},
{"lineNum":"  279","line":"\t\t\t  bool>::type=true>"},
{"lineNum":"  280","line":"        constexpr pair(const pair<_U1, _U2>& __p)"},
{"lineNum":"  281","line":"        : first(__p.first), second(__p.second) { }"},
{"lineNum":"  282","line":""},
{"lineNum":"  283","line":"      template<typename _U1, typename _U2, typename"},
{"lineNum":"  284","line":"\t       enable_if<_PCCFP<_U1, _U2>::template"},
{"lineNum":"  285","line":"\t\t\t   _ConstructiblePair<_U1, _U2>()"},
{"lineNum":"  286","line":"\t\t\t && !_PCCFP<_U1, _U2>::template"},
{"lineNum":"  287","line":"\t\t\t   _ImplicitlyConvertiblePair<_U1, _U2>(),"},
{"lineNum":"  288","line":"                         bool>::type=false>"},
{"lineNum":"  289","line":"\texplicit constexpr pair(const pair<_U1, _U2>& __p)"},
{"lineNum":"  290","line":"\t: first(__p.first), second(__p.second) { }"},
{"lineNum":"  291","line":""},
{"lineNum":"  292","line":"      constexpr pair(const pair&) = default;","class":"lineNoCov","hits":"0","possible_hits":"3",},
{"lineNum":"  293","line":"      constexpr pair(pair&&) = default;"},
{"lineNum":"  294","line":""},
{"lineNum":"  295","line":"      // DR 811."},
{"lineNum":"  296","line":"      template<typename _U1, typename"},
{"lineNum":"  297","line":"\t       enable_if<_PCCP::template"},
{"lineNum":"  298","line":"\t\t\t   _MoveCopyPair<true, _U1, _T2>(),"},
{"lineNum":"  299","line":"                         bool>::type=true>"},
{"lineNum":"  300","line":"       constexpr pair(_U1&& __x, const _T2& __y)","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  301","line":"       : first(std::forward<_U1>(__x)), second(__y) { }","class":"lineNoCov","hits":"0","possible_hits":"2",},
{"lineNum":"  302","line":""},
{"lineNum":"  303","line":"      template<typename _U1, typename"},
{"lineNum":"  304","line":"\t       enable_if<_PCCP::template"},
{"lineNum":"  305","line":"\t\t\t   _MoveCopyPair<false, _U1, _T2>(),"},
{"lineNum":"  306","line":"                         bool>::type=false>"},
{"lineNum":"  307","line":"       explicit constexpr pair(_U1&& __x, const _T2& __y)"},
{"lineNum":"  308","line":"       : first(std::forward<_U1>(__x)), second(__y) { }"},
{"lineNum":"  309","line":""},
{"lineNum":"  310","line":"      template<typename _U2, typename"},
{"lineNum":"  311","line":"\t       enable_if<_PCCP::template"},
{"lineNum":"  312","line":"\t\t\t   _CopyMovePair<true, _T1, _U2>(),"},
{"lineNum":"  313","line":"                         bool>::type=true>"},
{"lineNum":"  314","line":"       constexpr pair(const _T1& __x, _U2&& __y)"},
{"lineNum":"  315","line":"       : first(__x), second(std::forward<_U2>(__y)) { }"},
{"lineNum":"  316","line":""},
{"lineNum":"  317","line":"      template<typename _U2, typename"},
{"lineNum":"  318","line":"\t       enable_if<_PCCP::template"},
{"lineNum":"  319","line":"\t\t\t   _CopyMovePair<false, _T1, _U2>(),"},
{"lineNum":"  320","line":"                         bool>::type=false>"},
{"lineNum":"  321","line":"       explicit pair(const _T1& __x, _U2&& __y)"},
{"lineNum":"  322","line":"       : first(__x), second(std::forward<_U2>(__y)) { }"},
{"lineNum":"  323","line":""},
{"lineNum":"  324","line":"      template<typename _U1, typename _U2, typename"},
{"lineNum":"  325","line":"\t       enable_if<_PCCP::template"},
{"lineNum":"  326","line":"\t\t\t   _MoveConstructiblePair<_U1, _U2>()"},
{"lineNum":"  327","line":"\t\t\t  && _PCCP::template"},
{"lineNum":"  328","line":"\t\t\t   _ImplicitlyMoveConvertiblePair<_U1, _U2>(),"},
{"lineNum":"  329","line":"                         bool>::type=true>"},
{"lineNum":"  330","line":"\tconstexpr pair(_U1&& __x, _U2&& __y)","class":"lineCov","hits":"3","order":"899","possible_hits":"3",},
{"lineNum":"  331","line":"\t: first(std::forward<_U1>(__x)), second(std::forward<_U2>(__y)) { }","class":"linePartCov","hits":"3","order":"900","possible_hits":"6",},
{"lineNum":"  332","line":""},
{"lineNum":"  333","line":"      template<typename _U1, typename _U2, typename"},
{"lineNum":"  334","line":"\t       enable_if<_PCCP::template"},
{"lineNum":"  335","line":"\t\t\t   _MoveConstructiblePair<_U1, _U2>()"},
{"lineNum":"  336","line":"\t\t\t  && !_PCCP::template"},
{"lineNum":"  337","line":"\t\t\t   _ImplicitlyMoveConvertiblePair<_U1, _U2>(),"},
{"lineNum":"  338","line":"                         bool>::type=false>"},
{"lineNum":"  339","line":"\texplicit constexpr pair(_U1&& __x, _U2&& __y)"},
{"lineNum":"  340","line":"\t: first(std::forward<_U1>(__x)), second(std::forward<_U2>(__y)) { }"},
{"lineNum":"  341","line":""},
{"lineNum":"  342","line":""},
{"lineNum":"  343","line":"      template<typename _U1, typename _U2, typename"},
{"lineNum":"  344","line":"\t       enable_if<_PCCFP<_U1, _U2>::template"},
{"lineNum":"  345","line":"\t\t\t   _MoveConstructiblePair<_U1, _U2>()"},
{"lineNum":"  346","line":"\t\t\t  && _PCCFP<_U1, _U2>::template"},
{"lineNum":"  347","line":"\t\t\t   _ImplicitlyMoveConvertiblePair<_U1, _U2>(),"},
{"lineNum":"  348","line":"                         bool>::type=true>"},
{"lineNum":"  349","line":"\tconstexpr pair(pair<_U1, _U2>&& __p)","class":"lineCov","hits":"1","order":"946","possible_hits":"1",},
{"lineNum":"  350","line":"\t: first(std::forward<_U1>(__p.first)),"},
{"lineNum":"  351","line":"\t  second(std::forward<_U2>(__p.second)) { }","class":"linePartCov","hits":"1","order":"947","possible_hits":"2",},
{"lineNum":"  352","line":""},
{"lineNum":"  353","line":"      template<typename _U1, typename _U2, typename"},
{"lineNum":"  354","line":"\t       enable_if<_PCCFP<_U1, _U2>::template"},
{"lineNum":"  355","line":"\t\t\t   _MoveConstructiblePair<_U1, _U2>()"},
{"lineNum":"  356","line":"\t\t\t  && !_PCCFP<_U1, _U2>::template"},
{"lineNum":"  357","line":"\t\t\t   _ImplicitlyMoveConvertiblePair<_U1, _U2>(),"},
{"lineNum":"  358","line":"                         bool>::type=false>"},
{"lineNum":"  359","line":"\texplicit constexpr pair(pair<_U1, _U2>&& __p)"},
{"lineNum":"  360","line":"\t: first(std::forward<_U1>(__p.first)),"},
{"lineNum":"  361","line":"\t  second(std::forward<_U2>(__p.second)) { }"},
{"lineNum":"  362","line":""},
{"lineNum":"  363","line":"      template<typename... _Args1, typename... _Args2>"},
{"lineNum":"  364","line":"        pair(piecewise_construct_t, tuple<_Args1...>, tuple<_Args2...>);"},
{"lineNum":"  365","line":""},
{"lineNum":"  366","line":"      pair&"},
{"lineNum":"  367","line":"      operator=(typename conditional<"},
{"lineNum":"  368","line":"\t\t__and_<is_copy_assignable<_T1>,"},
{"lineNum":"  369","line":"\t\t       is_copy_assignable<_T2>>::value,"},
{"lineNum":"  370","line":"\t\tconst pair&, const __nonesuch_no_braces&>::type __p)"},
{"lineNum":"  371","line":"      {"},
{"lineNum":"  372","line":"\tfirst = __p.first;"},
{"lineNum":"  373","line":"\tsecond = __p.second;"},
{"lineNum":"  374","line":"\treturn *this;"},
{"lineNum":"  375","line":"      }"},
{"lineNum":"  376","line":""},
{"lineNum":"  377","line":"      pair&"},
{"lineNum":"  378","line":"      operator=(typename conditional<"},
{"lineNum":"  379","line":"\t\t__not_<__and_<is_copy_assignable<_T1>,"},
{"lineNum":"  380","line":"\t\t              is_copy_assignable<_T2>>>::value,"},
{"lineNum":"  381","line":"\t\tconst pair&, const __nonesuch_no_braces&>::type __p) = delete;"},
{"lineNum":"  382","line":""},
{"lineNum":"  383","line":"      pair&"},
{"lineNum":"  384","line":"      operator=(typename conditional<"},
{"lineNum":"  385","line":"\t\t__and_<is_move_assignable<_T1>,"},
{"lineNum":"  386","line":"\t\t       is_move_assignable<_T2>>::value,"},
{"lineNum":"  387","line":"\t\tpair&&, __nonesuch_no_braces&&>::type __p)"},
{"lineNum":"  388","line":"      noexcept(__and_<is_nothrow_move_assignable<_T1>,"},
{"lineNum":"  389","line":"\t              is_nothrow_move_assignable<_T2>>::value)"},
{"lineNum":"  390","line":"      {"},
{"lineNum":"  391","line":"\tfirst = std::forward<first_type>(__p.first);"},
{"lineNum":"  392","line":"\tsecond = std::forward<second_type>(__p.second);"},
{"lineNum":"  393","line":"\treturn *this;"},
{"lineNum":"  394","line":"      }"},
{"lineNum":"  395","line":""},
{"lineNum":"  396","line":"      template<typename _U1, typename _U2>"},
{"lineNum":"  397","line":"      typename enable_if<__and_<is_assignable<_T1&, const _U1&>,"},
{"lineNum":"  398","line":"\t\t\t\tis_assignable<_T2&, const _U2&>>::value,"},
{"lineNum":"  399","line":"\t\t\t pair&>::type"},
{"lineNum":"  400","line":"\toperator=(const pair<_U1, _U2>& __p)"},
{"lineNum":"  401","line":"\t{"},
{"lineNum":"  402","line":"\t  first = __p.first;"},
{"lineNum":"  403","line":"\t  second = __p.second;"},
{"lineNum":"  404","line":"\t  return *this;"},
{"lineNum":"  405","line":"\t}"},
{"lineNum":"  406","line":""},
{"lineNum":"  407","line":"      template<typename _U1, typename _U2>"},
{"lineNum":"  408","line":"      typename enable_if<__and_<is_assignable<_T1&, _U1&&>,"},
{"lineNum":"  409","line":"\t\t\t\tis_assignable<_T2&, _U2&&>>::value,"},
{"lineNum":"  410","line":"\t\t\t pair&>::type"},
{"lineNum":"  411","line":"\toperator=(pair<_U1, _U2>&& __p)"},
{"lineNum":"  412","line":"\t{"},
{"lineNum":"  413","line":"\t  first = std::forward<_U1>(__p.first);"},
{"lineNum":"  414","line":"\t  second = std::forward<_U2>(__p.second);"},
{"lineNum":"  415","line":"\t  return *this;"},
{"lineNum":"  416","line":"\t}"},
{"lineNum":"  417","line":""},
{"lineNum":"  418","line":"      void"},
{"lineNum":"  419","line":"      swap(pair& __p)"},
{"lineNum":"  420","line":"      noexcept(__and_<__is_nothrow_swappable<_T1>,"},
{"lineNum":"  421","line":"                      __is_nothrow_swappable<_T2>>::value)"},
{"lineNum":"  422","line":"      {"},
{"lineNum":"  423","line":"\tusing std::swap;"},
{"lineNum":"  424","line":"\tswap(first, __p.first);"},
{"lineNum":"  425","line":"\tswap(second, __p.second);"},
{"lineNum":"  426","line":"      }"},
{"lineNum":"  427","line":""},
{"lineNum":"  428","line":"    private:"},
{"lineNum":"  429","line":"      template<typename... _Args1, std::size_t... _Indexes1,"},
{"lineNum":"  430","line":"               typename... _Args2, std::size_t... _Indexes2>"},
{"lineNum":"  431","line":"        pair(tuple<_Args1...>&, tuple<_Args2...>&,"},
{"lineNum":"  432","line":"             _Index_tuple<_Indexes1...>, _Index_tuple<_Indexes2...>);"},
{"lineNum":"  433","line":"#endif"},
{"lineNum":"  434","line":"    };"},
{"lineNum":"  435","line":""},
{"lineNum":"  436","line":"#if __cpp_deduction_guides >= 201606"},
{"lineNum":"  437","line":"  template<typename _T1, typename _T2> pair(_T1, _T2) -> pair<_T1, _T2>;"},
{"lineNum":"  438","line":"#endif"},
{"lineNum":"  439","line":""},
{"lineNum":"  440","line":"  /// Two pairs of the same type are equal iff their members are equal."},
{"lineNum":"  441","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  442","line":"    inline _GLIBCXX_CONSTEXPR bool"},
{"lineNum":"  443","line":"    operator==(const pair<_T1, _T2>& __x, const pair<_T1, _T2>& __y)"},
{"lineNum":"  444","line":"    { return __x.first == __y.first && __x.second == __y.second; }"},
{"lineNum":"  445","line":""},
{"lineNum":"  446","line":"  /// <http://gcc.gnu.org/onlinedocs/libstdc++/manual/utilities.html>"},
{"lineNum":"  447","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  448","line":"    inline _GLIBCXX_CONSTEXPR bool"},
{"lineNum":"  449","line":"    operator<(const pair<_T1, _T2>& __x, const pair<_T1, _T2>& __y)"},
{"lineNum":"  450","line":"    { return __x.first < __y.first"},
{"lineNum":"  451","line":"\t     || (!(__y.first < __x.first) && __x.second < __y.second); }"},
{"lineNum":"  452","line":""},
{"lineNum":"  453","line":"  /// Uses @c operator== to find the result."},
{"lineNum":"  454","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  455","line":"    inline _GLIBCXX_CONSTEXPR bool"},
{"lineNum":"  456","line":"    operator!=(const pair<_T1, _T2>& __x, const pair<_T1, _T2>& __y)"},
{"lineNum":"  457","line":"    { return !(__x == __y); }"},
{"lineNum":"  458","line":""},
{"lineNum":"  459","line":"  /// Uses @c operator< to find the result."},
{"lineNum":"  460","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  461","line":"    inline _GLIBCXX_CONSTEXPR bool"},
{"lineNum":"  462","line":"    operator>(const pair<_T1, _T2>& __x, const pair<_T1, _T2>& __y)"},
{"lineNum":"  463","line":"    { return __y < __x; }"},
{"lineNum":"  464","line":""},
{"lineNum":"  465","line":"  /// Uses @c operator< to find the result."},
{"lineNum":"  466","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  467","line":"    inline _GLIBCXX_CONSTEXPR bool"},
{"lineNum":"  468","line":"    operator<=(const pair<_T1, _T2>& __x, const pair<_T1, _T2>& __y)"},
{"lineNum":"  469","line":"    { return !(__y < __x); }"},
{"lineNum":"  470","line":""},
{"lineNum":"  471","line":"  /// Uses @c operator< to find the result."},
{"lineNum":"  472","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  473","line":"    inline _GLIBCXX_CONSTEXPR bool"},
{"lineNum":"  474","line":"    operator>=(const pair<_T1, _T2>& __x, const pair<_T1, _T2>& __y)"},
{"lineNum":"  475","line":"    { return !(__x < __y); }"},
{"lineNum":"  476","line":""},
{"lineNum":"  477","line":"#if __cplusplus >= 201103L"},
{"lineNum":"  478","line":"  /// See std::pair::swap()."},
{"lineNum":"  479","line":"  // Note:  no std::swap overloads in C++03 mode, this has performance"},
{"lineNum":"  480","line":"  //        implications, see, eg, libstdc++/38466."},
{"lineNum":"  481","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  482","line":"    inline"},
{"lineNum":"  483","line":"#if __cplusplus > 201402L || !defined(__STRICT_ANSI__) // c++1z or gnu++11"},
{"lineNum":"  484","line":"    // Constrained free swap overload, see p0185r1"},
{"lineNum":"  485","line":"    typename enable_if<__and_<__is_swappable<_T1>,"},
{"lineNum":"  486","line":"                              __is_swappable<_T2>>::value>::type"},
{"lineNum":"  487","line":"#else"},
{"lineNum":"  488","line":"    void"},
{"lineNum":"  489","line":"#endif"},
{"lineNum":"  490","line":"    swap(pair<_T1, _T2>& __x, pair<_T1, _T2>& __y)"},
{"lineNum":"  491","line":"    noexcept(noexcept(__x.swap(__y)))"},
{"lineNum":"  492","line":"    { __x.swap(__y); }"},
{"lineNum":"  493","line":""},
{"lineNum":"  494","line":"#if __cplusplus > 201402L || !defined(__STRICT_ANSI__) // c++1z or gnu++11"},
{"lineNum":"  495","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  496","line":"    typename enable_if<!__and_<__is_swappable<_T1>,"},
{"lineNum":"  497","line":"\t\t\t       __is_swappable<_T2>>::value>::type"},
{"lineNum":"  498","line":"    swap(pair<_T1, _T2>&, pair<_T1, _T2>&) = delete;"},
{"lineNum":"  499","line":"#endif"},
{"lineNum":"  500","line":"#endif // __cplusplus >= 201103L"},
{"lineNum":"  501","line":""},
{"lineNum":"  502","line":"  /**"},
{"lineNum":"  503","line":"   *  @brief A convenience wrapper for creating a pair from two objects."},
{"lineNum":"  504","line":"   *  @param  __x  The first object."},
{"lineNum":"  505","line":"   *  @param  __y  The second object."},
{"lineNum":"  506","line":"   *  @return   A newly-constructed pair<> object of the appropriate type."},
{"lineNum":"  507","line":"   *"},
{"lineNum":"  508","line":"   *  The standard requires that the objects be passed by reference-to-const,"},
{"lineNum":"  509","line":"   *  but LWG issue #181 says they should be passed by const value.  We follow"},
{"lineNum":"  510","line":"   *  the LWG by default."},
{"lineNum":"  511","line":"   */"},
{"lineNum":"  512","line":"  // _GLIBCXX_RESOLVE_LIB_DEFECTS"},
{"lineNum":"  513","line":"  // 181.  make_pair() unintended behavior"},
{"lineNum":"  514","line":"#if __cplusplus >= 201103L"},
{"lineNum":"  515","line":"  // NB: DR 706."},
{"lineNum":"  516","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  517","line":"    constexpr pair<typename __decay_and_strip<_T1>::__type,"},
{"lineNum":"  518","line":"                   typename __decay_and_strip<_T2>::__type>"},
{"lineNum":"  519","line":"    make_pair(_T1&& __x, _T2&& __y)","class":"lineCov","hits":"1","order":"897","possible_hits":"1",},
{"lineNum":"  520","line":"    {"},
{"lineNum":"  521","line":"      typedef typename __decay_and_strip<_T1>::__type __ds_type1;"},
{"lineNum":"  522","line":"      typedef typename __decay_and_strip<_T2>::__type __ds_type2;"},
{"lineNum":"  523","line":"      typedef pair<__ds_type1, __ds_type2> \t      __pair_type;"},
{"lineNum":"  524","line":"      return __pair_type(std::forward<_T1>(__x), std::forward<_T2>(__y));","class":"lineCov","hits":"1","order":"898","possible_hits":"1",},
{"lineNum":"  525","line":"    }","class":"linePartCov","hits":"1","order":"902","possible_hits":"2",},
{"lineNum":"  526","line":"#else"},
{"lineNum":"  527","line":"  template<typename _T1, typename _T2>"},
{"lineNum":"  528","line":"    inline pair<_T1, _T2>"},
{"lineNum":"  529","line":"    make_pair(_T1 __x, _T2 __y)"},
{"lineNum":"  530","line":"    { return pair<_T1, _T2>(__x, __y); }"},
{"lineNum":"  531","line":"#endif"},
{"lineNum":"  532","line":""},
{"lineNum":"  533","line":"  /// @}"},
{"lineNum":"  534","line":""},
{"lineNum":"  535","line":"_GLIBCXX_END_NAMESPACE_VERSION"},
{"lineNum":"  536","line":"} // namespace std"},
{"lineNum":"  537","line":""},
{"lineNum":"  538","line":"#endif /* _STL_PAIR_H */"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "mipl_parser", "date" : "2018-11-28 14:11:04", "instrumented" : 11, "covered" : 8,};
var merged_data = [];
