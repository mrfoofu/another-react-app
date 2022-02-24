interface Props {
  /** describe an image inside a card */
  mediaAlt: string | undefined;

  /** display an image inside a card */
  mediaSrc: string | undefined;

  /** Optional card title */
  title?: string | null;

  /** Optional card subtitle */
  subtitle?: string | null;

  /** The URL you want to link to */
  url: string;
}

const Card = (props: Props): JSX.Element => {
  const { mediaAlt, mediaSrc, title, subtitle, url } = props;

  return (
    <article className="prose lg:prose-sm mx-3 my-6">
      <div className="bg-white dark:bg-slate-900 rounded-lg ring-1 ring-slate-900/5 shadow-xl px-2 py-2">
        <div>
          <span className="block not-prose items-center justify-center bg-indigo-500 rounded-md shadow-lg">
            {mediaSrc && <img className="w-full" src={mediaSrc} alt={mediaAlt} />}
          </span>
        </div>
        {(title || subtitle) && (
          <div>
            {title && (
              <h2 className="text-base font-medium">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm tracking-tight">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {url && (
          <a
            href={url}
            className="text-slate-500 dark:text-slate-400 mt-2 text-sm"
          >
            Read more
          </a>
        )}
      </div>
    </article>
  );
};

export default Card;
