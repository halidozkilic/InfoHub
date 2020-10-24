﻿using InfoHub.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InfoHub.Core.Interfaces
{
    public interface IPostRepository : IRepository<Post>
    {
        Task<List<Post>> GetAllPostsAsync();
        Post GetPost(int id);
    }
}