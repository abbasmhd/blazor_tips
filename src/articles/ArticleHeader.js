import React from 'react';
import Link from 'next/link';

export const ArticleHeader = ({ title, link, publishdate }) => {
    return (
        <header className="entry-header">
            <h1 className="entry-title">{title}</h1>
            <div className="entry-meta">
                <span className="meta-author">
                    <img alt="avatar"
                        src="https://secure.gravatar.com/avatar/22d474190b1889d3373fa4f9334e979c?s=20&amp;d=retro&amp;r=g"
                        className="avatar avatar-20 photo"
                        height="20"
                        width="20" />
                    <span className="byline">
                        <span className="author vcard">
                            <Link href="/">
                                <a className="url fn n">Mo</a>
                            </Link>
                        </span>
                    </span>
                </span>
                <span className="sep">/</span>
                <span className="meta-date">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="posted-on">
                        <Link href={link}>
                            <a rel="bookmark">
                                <time className="entry-date published" datetime="2019-10-02T22:09:18+10:00">{publishdate}</time>
                            </a>
                        </Link>
                    </span>
                </span>
            </div>
        </header>

    );
};