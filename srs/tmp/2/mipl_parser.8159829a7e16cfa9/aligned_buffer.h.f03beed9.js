var data = {lines:[
{"lineNum":"    1","line":"// Aligned memory buffer -*- C++ -*-"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"// Copyright (C) 2013-2017 Free Software Foundation, Inc."},
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
{"lineNum":"   25","line":"/** @file ext/aligned_buffer.h"},
{"lineNum":"   26","line":" *  This file is a GNU extension to the Standard C++ Library."},
{"lineNum":"   27","line":" */"},
{"lineNum":"   28","line":""},
{"lineNum":"   29","line":"#ifndef _ALIGNED_BUFFER_H"},
{"lineNum":"   30","line":"#define _ALIGNED_BUFFER_H 1"},
{"lineNum":"   31","line":""},
{"lineNum":"   32","line":"#pragma GCC system_header"},
{"lineNum":"   33","line":""},
{"lineNum":"   34","line":"#if __cplusplus >= 201103L"},
{"lineNum":"   35","line":"# include <type_traits>"},
{"lineNum":"   36","line":"#else"},
{"lineNum":"   37","line":"# include <bits/c++0x_warning.h>"},
{"lineNum":"   38","line":"#endif"},
{"lineNum":"   39","line":""},
{"lineNum":"   40","line":"namespace __gnu_cxx"},
{"lineNum":"   41","line":"{"},
{"lineNum":"   42","line":"  // A utility type containing a POD object that can hold an object of type"},
{"lineNum":"   43","line":"  // _Tp initialized via placement new or allocator_traits::construct."},
{"lineNum":"   44","line":"  // Intended for use as a data member subobject, use __aligned_buffer for"},
{"lineNum":"   45","line":"  // complete objects."},
{"lineNum":"   46","line":"  template<typename _Tp>"},
{"lineNum":"   47","line":"    struct __aligned_membuf"},
{"lineNum":"   48","line":"    {"},
{"lineNum":"   49","line":"      // Target macro ADJUST_FIELD_ALIGN can produce different alignment for"},
{"lineNum":"   50","line":"      // types when used as class members. __aligned_membuf is intended"},
{"lineNum":"   51","line":"      // for use as a class member, so align the buffer as for a class member."},
{"lineNum":"   52","line":"      struct _Tp2 { _Tp _M_t; };"},
{"lineNum":"   53","line":""},
{"lineNum":"   54","line":"      alignas(__alignof__(_Tp2::_M_t)) unsigned char _M_storage[sizeof(_Tp)];"},
{"lineNum":"   55","line":""},
{"lineNum":"   56","line":"      __aligned_membuf() = default;"},
{"lineNum":"   57","line":""},
{"lineNum":"   58","line":"      // Can be used to avoid value-initialization zeroing _M_storage."},
{"lineNum":"   59","line":"      __aligned_membuf(std::nullptr_t) { }"},
{"lineNum":"   60","line":""},
{"lineNum":"   61","line":"      void*"},
{"lineNum":"   62","line":"      _M_addr() noexcept","class":"lineCov","hits":"3","order":"300","possible_hits":"3",},
{"lineNum":"   63","line":"      { return static_cast<void*>(&_M_storage); }","class":"linePartCov","hits":"3","order":"301","possible_hits":"6",},
{"lineNum":"   64","line":""},
{"lineNum":"   65","line":"      const void*"},
{"lineNum":"   66","line":"      _M_addr() const noexcept","class":"lineCov","hits":"1","order":"1117","possible_hits":"1",},
{"lineNum":"   67","line":"      { return static_cast<const void*>(&_M_storage); }","class":"linePartCov","hits":"1","order":"1118","possible_hits":"2",},
{"lineNum":"   68","line":""},
{"lineNum":"   69","line":"      _Tp*"},
{"lineNum":"   70","line":"      _M_ptr() noexcept","class":"lineCov","hits":"3","order":"298","possible_hits":"3",},
{"lineNum":"   71","line":"      { return static_cast<_Tp*>(_M_addr()); }","class":"linePartCov","hits":"3","order":"299","possible_hits":"6",},
{"lineNum":"   72","line":""},
{"lineNum":"   73","line":"      const _Tp*"},
{"lineNum":"   74","line":"      _M_ptr() const noexcept","class":"lineCov","hits":"1","order":"1115","possible_hits":"1",},
{"lineNum":"   75","line":"      { return static_cast<const _Tp*>(_M_addr()); }","class":"linePartCov","hits":"1","order":"1116","possible_hits":"2",},
{"lineNum":"   76","line":"    };"},
{"lineNum":"   77","line":""},
{"lineNum":"   78","line":"  // Similar to __aligned_membuf but aligned for complete objects, not members."},
{"lineNum":"   79","line":"  // This type is used in <forward_list>, <future>, <bits/shared_ptr_base.h>"},
{"lineNum":"   80","line":"  // and <bits/hashtable_policy.h>, but ideally they would use __aligned_membuf"},
{"lineNum":"   81","line":"  // instead, as it has smaller size for some types on some targets."},
{"lineNum":"   82","line":"  // This type is still used to avoid an ABI change."},
{"lineNum":"   83","line":"  template<typename _Tp>"},
{"lineNum":"   84","line":"    struct __aligned_buffer"},
{"lineNum":"   85","line":"    : std::aligned_storage<sizeof(_Tp), std::alignment_of<_Tp>::value>"},
{"lineNum":"   86","line":"    {"},
{"lineNum":"   87","line":"      typename"},
{"lineNum":"   88","line":"\tstd::aligned_storage<sizeof(_Tp), std::alignment_of<_Tp>::value>::type"},
{"lineNum":"   89","line":"\t_M_storage;"},
{"lineNum":"   90","line":""},
{"lineNum":"   91","line":"      __aligned_buffer() = default;"},
{"lineNum":"   92","line":""},
{"lineNum":"   93","line":"      // Can be used to avoid value-initialization"},
{"lineNum":"   94","line":"      __aligned_buffer(std::nullptr_t) { }"},
{"lineNum":"   95","line":""},
{"lineNum":"   96","line":"      void*"},
{"lineNum":"   97","line":"      _M_addr() noexcept"},
{"lineNum":"   98","line":"      {"},
{"lineNum":"   99","line":"        return static_cast<void*>(&_M_storage);"},
{"lineNum":"  100","line":"      }"},
{"lineNum":"  101","line":""},
{"lineNum":"  102","line":"      const void*"},
{"lineNum":"  103","line":"      _M_addr() const noexcept"},
{"lineNum":"  104","line":"      {"},
{"lineNum":"  105","line":"        return static_cast<const void*>(&_M_storage);"},
{"lineNum":"  106","line":"      }"},
{"lineNum":"  107","line":""},
{"lineNum":"  108","line":"      _Tp*"},
{"lineNum":"  109","line":"      _M_ptr() noexcept"},
{"lineNum":"  110","line":"      { return static_cast<_Tp*>(_M_addr()); }"},
{"lineNum":"  111","line":""},
{"lineNum":"  112","line":"      const _Tp*"},
{"lineNum":"  113","line":"      _M_ptr() const noexcept"},
{"lineNum":"  114","line":"      { return static_cast<const _Tp*>(_M_addr()); }"},
{"lineNum":"  115","line":"    };"},
{"lineNum":"  116","line":""},
{"lineNum":"  117","line":"} // namespace"},
{"lineNum":"  118","line":""},
{"lineNum":"  119","line":"#endif /* _ALIGNED_BUFFER_H */"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "mipl_parser", "date" : "2018-11-28 14:11:04", "instrumented" : 8, "covered" : 8,};
var merged_data = [];
